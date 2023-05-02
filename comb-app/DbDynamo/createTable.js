const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({ region: "ap-south-1" });

const params = {
  TableName: "upes-colab",
  KeySchema: [
    { AttributeName: "userId", KeyType: "HASH" } // partition key
  ],
  AttributeDefinitions: [
    { AttributeName: "userId", AttributeType: "S" },
    { AttributeName: "username", AttributeType: "S" }, // S represents string type
    { AttributeName: 'email', AttributeType: "S" }
  ],
  GlobalSecondaryIndexes: [ // add the GSI definition
    {
      IndexName: "usernameIndex",
      KeySchema: [
        { AttributeName: "username", KeyType: "HASH" } // GSI partition key
      ],
      Projection: {
        ProjectionType: "ALL"
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    },
    {
      IndexName: 'emailIndex',
      KeySchema: [
        { AttributeName: 'email', KeyType: 'HASH' },
      ],
      Projection: {
        ProjectionType: 'ALL',
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
};

const command = new CreateTableCommand(params);

client.send(command).then((data) => {
  console.log("Table created:", data);
}).catch((error) => {
  console.error("Error creating table:", error);
});

