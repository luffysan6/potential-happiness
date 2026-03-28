const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const { saveTodo } = require("./TodoController.js");

const app = express();
app.use(express.json());
app.use(cors());
const URI = "mongodb://localhost:27017/";
const client = new MongoClient(URI);
const dbName = "Todo";
const PORT = 3000;

client.connect();

const db = client.db(dbName);

const collection = db.collection("todolist");

app.get("/", (request, response) => {
  response.send("Hello World From Express Backend");
});
app.post("/api/save", async (request, response) => {
  let data = request.body.todo;
  let { name, title, isTrue } = request.body;

  console.log(name, title, isTrue);

  const result = await collection.insertOne({
    title,
    name,
    isTrue,
  });

  response.json(result);
});

app.delete("/api/delete", async (req, res) => {
  const { id } = req.body;

  const result = await collection.deleteOne({ _id: id });

  res.send(result);
});

// Update APi

app.put("/update", async (req, res) => {
  const { id, title } = req.body;

  const Updated = await collection.updateMany(
    { title: "Hello World" },
    {
      $set: {
        title: title,
      },
    },
  );

  res.json({
    message: "Updated Data",
    data: Updated,
  });
});

app.get("/api/todos", async (request, response) => {
  const result = await collection.find({}).toArray();
  response.json(result);
});

app.post("/api/v1/save", async (request, response) => {
  try {
    const { title } = request.body;
    let status;
    if (!request.body.status) {
      status = false;
    }
    status = request.body.status;

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
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// http request

// get : get data
// post : new insert
// put : existing data update
// delete : delete data

// app.get( api routes, logic to handle the request);
