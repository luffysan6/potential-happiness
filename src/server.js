const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const { saveTodo } = require("../TodoController.js");
const path = require("path");
const TodoRoute = require("./Routes/Todo.Route.js");
const IndexRoute = require("./Routes/Index.Route.js");
const connectDB = require("./Configs/DBconnect.js");
const DummyRoutes = require("./Routes/TodoRoutes.js");
const basicMiddleware = require("./middleware/basic.middleware.js");
const { resolve } = require("dns");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // middleware
app.use(IndexRoute);
app.use("/todo", TodoRoute);
app.use("/api", DummyRoutes);
// app.use("/api", basicMiddleware, DummyRoutes);

// http://localhost:3000/

connectDB();

// console.log(IndexRoute);

app.post("/api/save", async (request, response) => {
  let data = request.body.todo;
  let { name, title, isTrue } = request.body;

  // console.log(name, title, isTrue);

  const result = await collection.insertOne({
    title,
    name,
    isTrue,
  });

  response.json(result);
});

// Update APi

app.put("/update", async (req, res) => {
  // console.log(req);
  const { id, status } = req.body;

  // let todo = await collection.findOne({_id:ObjectId(id)});

  const Updated = await collection.updateMany(
    { _id: new ObjectId(id) },
    {
      $set: {
        status: status,
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
