import { createRouter, createWebHistory } from "vue-router";
import NoteList from "../components/NoteList.vue";
import AddNoteForm from "../components/AddNoteForm.vue";
import EditNote from "../components/EditNote.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: NoteList,
  },
  {
    path: "/add",
    name: "AddNote",
    component: AddNoteForm,
  },
  {
    path: "/edit/:id",
    name: "EditNote",
    component: EditNote,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
