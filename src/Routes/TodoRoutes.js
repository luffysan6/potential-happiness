const { Router } = require("express");
const {
  getController,
  postController,
  deleteController,
} = require("../Controllers/TodoController.js");

const router = Router();

router.get("/", getController);
router.post("/", postController);
router.delete("/", deleteController);

module.exports = router;
