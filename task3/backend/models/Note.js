// backend/models/Note.js
import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Note", NoteSchema);
