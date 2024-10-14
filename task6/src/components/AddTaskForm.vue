<template>
  <form @submit.prevent="onSubmit" class="add-task-form">
    <input v-model="title" type="text" placeholder="Enter task title" class="task-input" />
    <button type="submit" class="add-button">Add Task</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const title = ref<string>('');

    const onSubmit = () => {
      if (title.value.trim()) {
        store.dispatch('addTask', { title: title.value });
        title.value = '';
      }
    };

    return { title, onSubmit };
  }
});
</script>

<style scoped>
.add-task-form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.task-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  flex: 1;
}

.add-button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #45a049;
}
</style>
