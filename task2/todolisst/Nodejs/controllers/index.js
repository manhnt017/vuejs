const Todo = require("../models/index.js");

// Lấy danh sách công việc
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Thêm công việc mới
const addTodo = async (req, res) => {
  const newTodo = new Todo({
    task: req.body.task,
  });

  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa công việc
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Công việc đã bị xóa" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật trạng thái hoàn thành
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo)
      return res.status(404).json({ message: "Công việc không tồn tại" });

    todo.completed = req.body.completed;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};
