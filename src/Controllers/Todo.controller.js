const { MongoClient, ObjectId } = require("mongodb");
const URI = "mongodb://localhost:27017/";
const client = new MongoClient(URI);
const dbName = "Todo";
const PORT = 3000;

client.connect();

const db = client.db(dbName);

const collection = db.collection("todolist");
const Home = async (request, response) => {
  try {
    const result = await collection.find({}).toArray();

    let total_status = result.map((item) => item.status);

    return response.json(total_status);
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

    if(!id){
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

module.exports = { Home, deletetodo };
