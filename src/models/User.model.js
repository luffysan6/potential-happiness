const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,

  password: String,

  mobile: Number,

  email: String,
  age: Number,
});

const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
