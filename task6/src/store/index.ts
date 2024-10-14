import { createStore } from 'vuex';
import axios from 'axios';
import type { Task } from '@/types/task';
import type { Commit } from 'vuex/types/index.js';

interface State {
  tasks: Task[];
}

export default createStore<State>({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state :State, tasks: Task[]) {
      state.tasks = tasks;
    },
    addTask(state:State, task: Task) {
      state.tasks.push(task);
    },
    toggleTaskComplete(state:State, taskId: number) {
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(state:State, taskId: number) {
      state.tasks = state.tasks.filter(t => t.id !== taskId);
    },
  },
  actions: {
    // async fetchTasks({ commit }) {//-
    async fetchTasks({ commit }: { commit: Commit }) {//+
      const response = await axios.get('http://localhost:3000/tasks');
      commit('setTasks', response.data);
    },
    async addTask({ commit }: { commit: Commit }, taskData :Omit<Task, "id"|"completed">) {
      const response = await axios.post('http://localhost:3000/tasks', { ...taskData, completed: false });
      commit('addTask', response.data);
    },
    async toggleTaskComplete({ commit }: { commit: Commit }, taskId:Number) {
      const task = (await axios.get(`http://localhost:3000/tasks/${taskId}`)).data;
      await axios.put(`http://localhost:3000/tasks/${taskId}`, { ...task, completed: !task.completed });
      commit('toggleTaskComplete', taskId);
    },
    async deleteTask({ commit }: { commit: Commit }, taskId:number) {
      await axios.delete(`http://localhost:3000/tasks/${taskId}`);
      commit('deleteTask', taskId);
    },
  },
});
