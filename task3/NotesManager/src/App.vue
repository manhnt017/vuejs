<template>
  <div id="app" class="container mt-4">
    <router-view />

    <!-- Nav Link -->
    <nav class="mt-4">
      <router-link to="/" class="btn btn-outline-primary me-2"
        >Danh sách Ghi chú</router-link
      >
      <router-link to="/add" class="btn btn-outline-success"
        >Thêm Ghi chú</router-link
      >
    </nav>
  </div>
</template>

<script>
import NoteList from "./components/NoteList.vue";
import NoteItem from "./components/NoteItem.vue";
import "vue3-toastify/dist/index.css";
import axios from "axios";

export default {
  components: {
    NoteList,
    NoteItem,
  },
  data() {
    return {
      notes: [],
    };
  },
  computed: {
    filteredNotes() {
      return this.notes.filter((note) => note.completed);
    },
  },
  methods: {
    addNote(note) {
      this.notes.push(note);
    },
    editNote(id) {
      this.$router.push(`/edit/${id}`);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:3000/notes");
      this.notes = await res.data;
    } catch (error) {
      console.log(error);
    }
  },
  beforeUnmount() {
    // Lưu danh sách ghi chú khi component bị hủy
    localStorage.setItem("notes", JSON.stringify(this.notes));
  },
};
</script>

<style>
.list-item-enter-active,
.list-item-leave-active {
  transition: opacity 0.5s;
}
.list-item-enter,
.list-item-leave-to {
  opacity: 0;
}
</style>
