const express = require("express");
const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/index.js");

const router = express.Router();

// Định nghĩa các route
router.get("/todos", getTodos);
router.post("/todos", addTodo);
router.delete("/todos/:id", deleteTodo);
router.put("/todos/:id", updateTodo);

module.exports = router;
