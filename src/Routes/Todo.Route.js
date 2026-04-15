const { Router } = require("express");
const {
  Home,
  deletetodo,
  saveTodo,
} = require("../Controllers/Todo.controller.js");

const TodoRoute = Router();

TodoRoute.get("/", Home);
TodoRoute.delete("/api/delete", deletetodo);
TodoRoute.post("/save", saveTodo);

module.exports = TodoRoute;
