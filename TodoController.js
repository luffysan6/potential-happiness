const { MongoClient, ObjectId } = require("mongodb");

const URI = "mongodb://localhost:27017/";
const client = new MongoClient(URI);
const dbName = "Todo";
const PORT = 3000;

client.connect();

const db = client.db(dbName);

const collection = db.collection("todolist");

const saveTodo = async (request, response) => {
  try {
    const { title, status } = request.body;

    if (!status) {
      status = false;
    }

    const result = await collection.insertOne({
      title,
      status,
    });

    return response.json({
      message: "Saved SuccessFully",
      result,
    });
  } catch (error) {
    console.log("Error While Saving Todo's");
    return response.json({
      message: "Error At Backend",
    });
  }
};

module.exports = saveTodo;
