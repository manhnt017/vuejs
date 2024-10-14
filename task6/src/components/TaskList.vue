<template>
  <ul>
    <transition-group name="task" tag="ul">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </transition-group>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import TaskItem from './TaskItem.vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: { TaskItem },
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasks);
    onMounted(()=>{
      store.dispatch('fetchTasks')
    })

    return { tasks };
  },
});
</script>
<style scoped>
.task-enter-active, .task-leave-active {
  transition: all 0.5s ease;
}

.task-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.task-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>