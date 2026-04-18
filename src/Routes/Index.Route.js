const { Router } = require("express");
const { Index, handleupload } = require("../Controllers/Index.Controller");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const upload = require("../middleware/upload.middleware.js");
const IndexRoute = Router();

IndexRoute.get("/", Index);
IndexRoute.post("/upload", upload.single("image"), handleupload);

module.exports = IndexRoute;
