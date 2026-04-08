const { MongoClient } = require("mongodb");
const URI = "mongodb://localhost:27017/";
const client = new MongoClient(URI);
const dbName = "Todo";
const PORT = 3000;

client.connect();

const db = client.db(dbName);

const collection = db.collection("todolist");
const Home = async (request, response) => {
  const result = await collection.find({}).toArray();
  response.json(result);
};

const deletetodo = async (req, res) => {
  const { id } = req.body;

  const result = await collection.deleteOne({ _id: new ObjectId(id) });

  res.send(result);
};

module.exports = { Home, deletetodo };
