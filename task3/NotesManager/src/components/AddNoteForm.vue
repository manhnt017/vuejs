
<template>
  <div class="container mt-4">
    <h2 class="mb-4">Thêm Ghi chú</h2>
    <div class="mb-3">
      <input v-model="newNoteContent" placeholder="Nhập ghi chú" class="form-control" />
    </div>
    <button class="btn btn-primary" @click="addNote">Thêm</button>
  </div>
</template>

<script>
// import { toast } from 'vue3-toastify';
import axios from 'axios';
import { toast } from 'vue3-toastify';
export default {
  data() {
    return {
      newNoteContent: ''
    };
  },
  methods: {
    async addNote() {
      const newNote = {
        content: this.newNoteContent,
        completed: false  
      };
      try {
        const res = await axios.post("http://localhost:3000/notes",newNote);
        this.$emit('note-added', res.data);
        this.newNoteContent='';
        toast.success("Add Done",{autoClose:1000})
        setTimeout(() => {
        this.$router.push('/');
        }, 1500);
      } catch (error) {
        console.log(error);
        toast.error("Add False",{autoClose:1000})
      }
    }
  }
};
</script>


