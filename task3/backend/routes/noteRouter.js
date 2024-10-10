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
    content: req.body.content,
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
    const result = await Note.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Ghi chú đã được xóa" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
