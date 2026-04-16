const { Router } = require("express");
const {
  Home,
  deletetodo,
  saveTodo,
  todoById,
  todoByIdDel,
  updatetodo,
} = require("../Controllers/Todo.controller.js");

const TodoRoute = Router();

TodoRoute.get("/", Home);
TodoRoute.delete("/api/delete", deletetodo);
TodoRoute.post("/save", saveTodo);
TodoRoute.get("/:id", todoById);
TodoRoute.delete("/:id", todoByIdDel);
TodoRoute.put("/:id", updatetodo);
// TodoRoute.get("/:id/:method/:admin", todoById);

// Parameter exampple
// http://localhost:3000/todo/69df8d21bf117842fcc293a3/delete/dhruv
// http://localhost:3000/todo/:id/:method/:admin

/*
        {
        id : 69df8d21bf117842fcc293a3,
        method : delete,
        admin : dhruv
        }
*/

module.exports = TodoRoute;
