// server.js (hoặc app.js nếu bạn đặt tên khác)
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import noteRoutes from "./routes/noteRouter.js"; // Đảm bảo thêm .js nếu bạn đã thay đổi extension

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes", noteRoutes);

// Kết nối đến MongoDB
mongoose
  .connect("mongodb://localhost:27017/notesdb1")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
