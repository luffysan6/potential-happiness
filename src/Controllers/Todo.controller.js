const todoModel = require("../models/Todo.model.js");

// const collection = db.collection("todolist");
const Home = async (request, response) => {
  try {
    const result = await todoModel.find({
      status: false,
    });

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

const todoById = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;
    const result = await todoModel.findById(id);
    res.json({
      result,
    });
  } catch (error) {
    console.log("Error While Saving Todo's");
    return response.json({
      message: "Error At Backend",
    });
  }
};

const todoByIdDel = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;
    const result = await todoModel.findByIdAndDelete(id);
    res.json({
      result,
    });
  } catch (error) {
    console.log("Error While Saving Todo's");
    return response.json({
      message: "Error At Backend",
    });
  }
};

const updatetodo = async (req, res) => {
  try {
    const id = req.params.id;
    const uppdatebody = req.body;
    console.log(uppdatebody);

    const result = await todoModel.findByIdAndUpdate(
      id,
      {
        status: uppdatebody.status,
      },
      {
        new: true,
      },
    );
    return res.json(result);
  } catch (error) {
    console.log("Error While Saving Todo's");
    return response.json({
      message: "Error At Backend",
    });
  }
};


todoModel.deleteMany({},{})
module.exports = {
  Home,
  deletetodo,
  saveTodo,
  todoById,
  todoByIdDel,
  updatetodo,
};
