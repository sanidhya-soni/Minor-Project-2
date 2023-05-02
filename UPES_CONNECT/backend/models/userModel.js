const { DynamoDBClient, PutItemCommand, QueryCommand } = require('@aws-sdk/client-dynamodb');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const client = new DynamoDBClient({ region: 'ap-south-1' }); // your DynamoDB region

class UserModel {

  
  static async createUser(username, secret, email, first_name, last_name) {
    
    const usernameExists = await this.getUserByUsername(username);
    const emailExists = await this.getUserByEmail(email);
    if (usernameExists) {
      throw new Error('Username already exists');
    }
    if (emailExists) {
      throw new Error('Email already exists');
    }

    const userId = uuidv4();
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
	  secret = await bcrypt.hash(secret, salt);
    const params = {
      TableName: 'upes-colab', // your DynamoDB table name
      Item: {
        "userId": { S: userId },
        "username": { S: username },
        "secret": { S: secret },
        "email": { S: email },
        "first_name": { S: first_name },
        "last_name": { S: last_name },
      }
    };
    try {
      
      await client.send(new PutItemCommand(params));
      const token = jwt.sign({ userId, username, email, secret}, "125jhhabhay");
      return { userId, username, email, first_name, last_name, token };
    } catch (error) {
      console.log('Error creating user:', error);
      throw error;
    }
  }

  static async getUserByToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const user = await this.getUserByUsername(decoded.username);
      
      if (user && user.userId === decoded.userId) {
        return user;
      } else {
        throw new Error('Invalid token');
      }
    } catch (error) {
      console.log('Error getting user by token:', error);
      throw error;
    }
  }

  static async getUserByUsername(username) {
    const params = {
      TableName: 'upes-colab',
      IndexName: 'usernameIndex',
      KeyConditionExpression: 'username = :username',
      ExpressionAttributeValues: {
        ':username': { S: username },
      },
    };
    const result = await client.send(new QueryCommand(params));
    return result.Items[0];
  }
  
  static async getUserByEmail(email) {
    const params = {
      TableName: 'upes-colab',
      IndexName: 'emailIndex',
      KeyConditionExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': { S: email },
      },
    };
    const result = await client.send(new QueryCommand(params));
    return result.Items[0];
  }
  
}

module.exports = UserModel;
