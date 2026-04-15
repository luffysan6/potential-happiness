const todoModel = require("../models/Todo.model.js");

// const collection = db.collection("todolist");
const Home = async (request, response) => {
  try {
    const result =await todoModel.find();

    return response.json(result);
  } catch (error) {
    console.log(
      "Error At Home Todo '/' Routes Error message :\t",
      error.message,
    );

    return response.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deletetodo = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return response.status(500).json({
        success: false,
        message: "Please Send a Id in Request",
      });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    res.send(result);
  } catch (error) {
    console.log(
      "Error At Delete Todo '/delete' Routes Error message :\t",
      error.message,
    );

    return response.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const saveTodo = async (request, response) => {
  try {
    const { title } = request.body;
    let status;
    if (!request.body.status) {
      status = false;
    }
    status = request.body.status;

    const todo = new todoModel({
      title: title,
      status: status,
    });
    const result = await todo.save();

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

module.exports = { Home, deletetodo, saveTodo };
