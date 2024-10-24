import { createStore } from "vuex";
import axios from "axios";
import type { Task } from "@/types/task";

interface State {
  tasks: Task[];
}
const APIURL = "http://localhost:3000/tasks";

export default createStore<State>({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks: Task[]) {
      state.tasks = tasks;
    },
    addTask(state, task: Task) {
      state.tasks.push(task);
    },
    toggleTaskComplete(state, taskId: string) {
      const task = state.tasks.find((t) => t._id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(state, taskId: string) {
      state.tasks = state.tasks.filter((t) => t._id !== taskId);
    },
  },
  actions: {
    // async fetchTasks
    async fetchTasks({ commit }) {
      const response = await axios.get(APIURL);
      commit("setTasks", response.data);
    },
    async addTask({ commit }, taskData: Omit<Task, "id" | "completed">) {
      const response = await axios.post(APIURL, {
        ...taskData,
        completed: false,
      });
      commit("addTask", response.data);
    },
    async toggleTaskComplete({ commit }, taskId: Number) {
      const task = (await axios.get(`${APIURL}/${taskId}`)).data;
      await axios.put(`${APIURL}/${taskId}`, {
        ...task,
        completed: !task.completed,
      });
      commit("toggleTaskComplete", taskId);
    },
    async deleteTask({ commit }, taskId) {
      console.log("Deleting task with ID:", taskId); // Ghi lại ID
      if (typeof taskId !== "string" || !taskId.trim()) {
        console.error("log err"); // Ghi lại lỗi
        return; 
      }
      try {
        await axios.delete(`${APIURL}/${taskId}`);
        commit("deleteTask", taskId);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
