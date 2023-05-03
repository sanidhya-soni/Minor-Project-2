const { DynamoDBClient, QueryCommand } = require('@aws-sdk/client-dynamodb');

const client = new DynamoDBClient({ region: 'ap-south-1' }); // your DynamoDB region

class UserModel {

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
}

module.exports = UserModel;
