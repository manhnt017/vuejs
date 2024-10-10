const express = require("express");
const cors = require("cors");
const connectDB = require("./config/index.js");
const todoRoutes = require("./routes/index.js");

const app = express();

// Kết nối MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Sử dụng các routes
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
