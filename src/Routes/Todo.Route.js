const { Router } = require("express");
const { Home, deletetodo } = require("../Controllers/Todo.controller.js");

const TodoRoute = Router();

TodoRoute.get("/", Home);
TodoRoute.delete("/api/delete", deletetodo);

module.exports = TodoRoute;
