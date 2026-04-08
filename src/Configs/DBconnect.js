const { MongoClient, ObjectId, ExplainVerbosity } = require("mongodb");

const URI = "mongodb://localhost:27017/";
const client = new MongoClient(URI);
const dbName = "Todo"

async function connectDB(params) {
  try {
    await client.connect();

    const db = client.db(dbName);

    const collection = await db.collection("todolist");
    console.log("Connection To Mongo DB Successfully ✅");
    return collection;
  } catch (err) {
    console.error("Error While Connecting To MongoDb : \t", err.message);
  }
}

module.exports = connectDB;
