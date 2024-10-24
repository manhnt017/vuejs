// backend/routes/noteRoutes.js
import express from "express";
import Note from "../models/Note.js"; // Đảm bảo thêm .js nếu bạn đã thay đổi extension

const router = express.Router();

// Lấy tất cả ghi chú
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Lấy ghi chú theo ID
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Thêm ghi chú
router.post("/", async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    completed: req.body.completed,
  });

  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Cập nhật ghi chú
router.put("/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Xóa ghi chú
router.delete("/:id", async (req, res) => {
  try {
    const noteId = req.params.id; // Đổi tên biến từ taskId thành noteId
    const deletedNote = await Note.findByIdAndDelete(noteId); // Sử dụng Note thay vì Task
    if (!deletedNote) {
      return res.status(404).send('Note not found'); // Đổi thông báo cho đúng
    }
    res.status(204).send(); // Không trả về nội dung cho yêu cầu xóa
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

export default router;
