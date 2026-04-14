const basicMiddleware = async (req, res, next) => {
  try {
    // let { user, name } = req.body;
    // let user = req.body.user ? req.body.user : "";
    // let name = req.body.name ? req.body.name : "";
    let user = req.body.user || "";
    let name = req.body.name || "";

    if (!user || !name) {
      return res.status(400).json({
        message: "bad request",
      });
    }

    next();
  } catch (error) {
    console.log("Error in Basic Middleware :\t", error.message);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = basicMiddleware;
