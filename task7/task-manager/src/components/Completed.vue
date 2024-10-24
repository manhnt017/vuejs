
<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Công việc đã hoàn thành</h1>
      <ul class="list-group">
        <li 
          v-for="task in completedTasks" 
          :key="task._id" 
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ task.title }}
          <span class="badge bg-success rounded-pill">Hoàn thành</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import type { Task } from '@/types/task';
import axios from 'axios';
  
  export default {
    data() {
      return {
        tasks: [] as Task[]
      };
    },
    mounted() {
      this.fetchTasks();
    },
    computed: {
      completedTasks() {
        return this.tasks.filter((task: { completed: boolean }) => task.completed);
      }
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await axios.get('http://localhost:3000/tasks');
          this.tasks = response.data;
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    }
  };
  </script>
  
  