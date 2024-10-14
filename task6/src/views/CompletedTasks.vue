<template>
    <div>
      <h1>Completed Tasks</h1>
      <TaskList />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import TaskList from '../components/TaskList.vue';
  
  export default defineComponent({
    components: { TaskList },
  });
  </script>
  