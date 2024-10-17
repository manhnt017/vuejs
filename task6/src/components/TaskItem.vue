<template>
  <li class="task-item">
    <input type="checkbox" :checked="task.completed" @change="toggleComplete" />
    <span :class="{ completed: task.completed }">{{ task.title }}</span>
    <button @click="deleteTask" class="delete-button">Delete</button>
  </li>
</template>

<script lang="ts">
import type { Task } from '@/types/task';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    task: {
      type: Object as () => Task,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const toggleComplete = () => {
      store.dispatch('toggleTaskComplete', props.task.id);
    };

    const deleteTask = () => {
      store.dispatch('deleteTask', props.task.id);
    };

    return { toggleComplete, deleteTask };
  }
});
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.completed {
  text-decoration: line-through;
  color: #999;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #d32f2f;
}
</style>
