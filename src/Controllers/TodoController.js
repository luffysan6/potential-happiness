const getController = async (request, response) => {
  try {
    // process.exit(1);

    response.status(200).json({
      message: "Hello From '/' get Route",
    });
  } catch (error) {
    console.log("server Error ", error.message);
    response.status(500).json({
      message: "Server Error ",
    });
  }
};
const postController = async (request, response) => {
  try {
    // process.exit(1);
    let user = request.body.user ? request.body.user : "";
    let name = request.body.name ? request.body.name : "";
    // let user = request.body.user || "";
    // let name = request.body.name || "";

    // const { user, name } = request.body;

    if (!user || !name) {
      return response.status(400).json({
        message: "bad request",
      });
    }

    return response.status(200).json({
      message: "Hello From '/' post Route",
    });
  } catch (error) {
    console.log("server Error ", error.message);
    if (error.TypeError) {
      return response.json({
        message: "type error",
      });
    }
    console.log(error.TypeError);
    return response.status(500).json({
      message: "Server Error ",
    });
  }
};
const deleteController = async (request, response) => {
  response.json({
    message: "Hello From '/' Delete Route",
  });
};

module.exports = { getController, postController, deleteController };
