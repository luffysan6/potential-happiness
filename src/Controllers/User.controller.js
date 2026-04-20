const USER = require("../models/User.model.js");

const Home = async (req, res) => {
  res.json({
    message: "Hello  From USer /",
  });
};

const save = async (req, res) => {
  try {
    const { username, email, mobile, age, password } = req.body;

    if (!username || !email || !mobile || !age || !password) {
      res.status(500).json({
        message: "Fill All the require Details",
      });
    }

    let newUser = new USER();
    newUser.email = email;
    newUser.username = username;
    newUser.mobile = mobile;
    newUser.password = password;
    newUser.age = age;

    const result = await newUser.save();

    if (!result) {
      res.status(500).json({
        message: "server Error",
      });
    }

    res.status(201).json({
      message: "user Created Successfully",
      userDetails: result,
    });
  } catch (error) {
    console.log("Error in Save Controller In User \t", error.message);
    res.status(500).json({
      message: "Error From Server",
    });
  }
};

const FetchFromAge = async (req, res) => {
  try {
    const { age } = req.params;

    const result = await USER
      .find
      //     {
      //   age: {
      //     $lte: age, //less than equal,
      //     $gte:age //greater than equal
      //   },
      // }
      ()
      .sort("age");

    res.json({
      result,
    });
  } catch (error) {
    console.log("Error in Save Controller In User \t", error.message);
    res.status(500).json({
      message: "Error From Server",
    });
  }
};

module.exports = { Home, save, FetchFromAge };
