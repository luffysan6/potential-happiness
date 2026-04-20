const { Router } = require("express");
const { Home, save, FetchFromAge } = require("../Controllers/User.controller");

const router = Router();

router.get("/", Home);
router.post("/save", save);
router.get("/:age", FetchFromAge);

module.exports = router;
