<template>
    <div class="add-task container mt-4">
      <h2 class="text-center">Thêm Công Việc Mới</h2>
      <form @submit.prevent="handleAddTask" class="bg-light p-4 rounded shadow">
        <div class="form-group mb-3">
          <label for="task-title" class="form-label">Tiêu đề công việc:</label>
          <input
            id="task-title"
            v-model="taskTitle"
            placeholder="Nhập tiêu đề công việc"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-success w-100">Thêm Công Việc</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { useTaskStore } from '@/stores';
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const taskTitle = ref('');
      const taskStore = useTaskStore();
  
      const handleAddTask = async () => {
        if (taskTitle.value.trim()) {
          await taskStore.addTask(taskTitle.value);
          taskTitle.value = ''; // Clear input after adding task
        }
      };
  
      return {
        taskTitle,
        handleAddTask,
      };
    },
  });
  </script>
  
  <style scoped>
  .add-task {
    margin: 20px 0;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  input {
    padding: 10px;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #369974; /* You can keep or remove this */
  }
  </style>
  