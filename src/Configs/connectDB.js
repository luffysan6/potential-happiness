const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Todo");
    console.log("Connected TO Database Duccessfuly ✅");
  } catch (error) {
    console.log("Error While Connecting to MONGODB");
  }
};

module.exports = connectDB;
