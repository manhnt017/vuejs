<template>
  <div class="container mt-4">
    <h2 class="mb-4">Chỉnh sửa ghi chú</h2>
      <div  class="mb-3">
        <input 
          v-model="noteContent" 
          class="form-control" 
          placeholder="Nội dung ghi chú" 
        />
        <button class="btn btn-success mt-2" @click="saveNote">Lưu</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
export default {
  data() {
    return {
      noteContent: ''
    };
  },
  async mounted() {
    const noteId = this.$route.params.id;
    if (noteId) {
      try {
        const res = await axios.get(`http://localhost:3000/notes/${noteId}`);
        this.noteContent = res.data.content;
        toast.success("Take data ok",{autoClose:1000});
      } catch (error) {
        console.log(error);
        toast.error("DOn't take noteID",{autoClose:1000});
      }
    }
  },
  methods: {
    async saveNote() {
      const noteId = this.$route.params.id;
        if (noteId) {
          try {
              await axios.put(`http://localhost:3000/notes/${noteId}`,{
                      content: this.noteContent
                })
                toast.success("Edit Done",{autoClose:1000})
                setTimeout(() => {
                  this.$router.push('/');
                }, 1000);
          } catch (error) {
            console.log(error);
            toast.error("Edit False",{autoClose:1000})
          }
      }
     }
  }
};
</script>

<style>
</style>
