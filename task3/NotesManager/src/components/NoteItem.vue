<template>
  <div class="note-item card p-3 mb-3 shadow-sm">
    <input type="checkbox" v-model="note.completed" @change="updateNoteStatus"/>
    <p class="card-text">{{ note.content }}</p>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary" @click="editNote">Chỉnh sửa</button>
      <button class="btn btn-danger" @click="deleteNote(note._id)">Xóa</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
export default {
  props: ['note'],
  methods: {
    async updateNoteStatus() {
      try {
          await axios.put(`http://localhost:3000/notes/${this.note._id}`, {
            completed: this.note.completed
          });
            if (this.note.completed) {
              toast.success('note complete');
            }else{
              toast.error('note not complete');
            }
      } catch (error) {
          console.error('Error updating note status:', error);
      }
    },
    editNote() {
      if (this.note && this.note._id) {
        this.$router.push(`/edit/${this.note._id}`);
      } else {
        console.error('Note ID is not defined');
      }
    },
    async deleteNote(noteId) {
      try {
        await axios.delete(`http://localhost:3000/notes/${noteId}`);
        this.$emit('delete', noteId); 
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    }
  }
};
</script>
