<template>
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AddTaskForm from '../components/AddTaskForm.vue';
  import TaskList from '../components/TaskList.vue';
  
  export default defineComponent({
    components: {
      AddTaskForm,
      TaskList,
    },
  });
  </script>
  