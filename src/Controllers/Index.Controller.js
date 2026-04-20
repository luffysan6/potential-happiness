const fs = require("fs");
const path = require("path");
const Index = async (req, res) => {
  return res.status(200).send("Hello From Index Route\t\n");
};

const handleupload = async (req, res) => {
  try {
    let filedata = req;

    console.log(filedata);
  } catch (error) {
    console.log("Error in '/upload route' " + error.message);
    res.status(500).json({
      meessage: "Error in '/upload route",
    });
  }
};
module.exports = { Index, handleupload };
