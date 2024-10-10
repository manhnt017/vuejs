<template>
  <div class="container mt-4">
    <h2 class="mb-4">Danh sách Ghi chú</h2>
    <div class="mb-3">
      <select v-model="filter" class="form-select">
        <option value="all">Tất cả</option>
        <option value="completed">Đã hoàn thành</option>
        <option value="incomplete">Chưa hoàn thành</option>
      </select>
    </div>

    <div v-if="isLoading" class="text-center">
      <p>.....Loading......</p>
    </div>
    <transition-group v-else name="fade" tag="ul" class="list-group">
      <li v-for="note in filteredNotes" :key="note._id" class="list-group-item">
        <NoteItem :note="note" @delete="deleteNote" />
      </li>
    </transition-group>
  </div>
</template>

<script>
import axios from "axios";
import NoteItem from "./NoteItem.vue";
import { toast } from "vue3-toastify";
export default {
  components: {
    NoteItem,
  },
  data() {
    return {
      notes: [],
      filter: "all",
      isLoading: true,
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/notes");
      this.notes = response.data;
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    filteredNotes() {
      if (this.filter === "completed") {
        return this.notes.filter((note) => note.completed);
      } else if (this.filter === "incomplete") {
        return this.notes.filter((note) => !note.completed);
      } else {
        return this.notes;
      }
    },
  },
  beforeDestroy() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  },
  methods: {
    deleteNote(id) {
      axios
        .delete(`http://localhost:3000/notes/${id}`)
        .then(() => {
          this.notes = this.notes.filter((note) => note._id !== id);
          toast.success("Delete Done", { autoClose: 1500 });
        })
        .catch((error) => console.error("Error deleting note:", error));
    },

    updateNote(updatedNote) {
      const index = this.notes.findIndex(
        (note) => note._id === updatedNote._id
      );
      if (index !== -1) {
        this.notes.splice(index, 1, updatedNote);
      }
    },

    filterNotes(status) {
      this.filter = status;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
