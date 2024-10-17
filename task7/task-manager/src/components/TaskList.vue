<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Danh Sách Công Việc</h1>
    <ul class="list-group">
      <transition-group name="fade" tag="ul">
        <li v-for="task in tasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
          <input
            type="checkbox"
            v-model="task.completed"
            @change="updateTask(task)"
            class="form-check-input me-2"
          />
          <span 
            v-if="!isEditingTask(task.id)" 
            :class="{ completed: task.completed }"
          >
            {{ task.title }} - {{ task.completed ? 'Hoàn thành' : 'Chưa hoàn thành' }}
          </span>
          <input
            v-else
            v-model="task.title"
            @keyup.enter="saveUpdatedTask(task)"
            class="form-control me-2"
          />

          <div>
            <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">Xóa</button>
            <button 
              v-if="!isEditingTask(task.id)" 
              class="btn btn-primary btn-sm ms-2" 
              @click="editTask(task.id)"
            >
              Cập Nhật
            </button>
            <button 
              v-if="isEditingTask(task.id)" 
              class="btn btn-success btn-sm ms-2" 
              @click="saveUpdatedTask(task)"
            >
              Lưu
            </button>
          </div>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script lang="ts">
import { useTaskStore } from '@/stores';
import type { Task } from '@/types/task';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref('');
    const editingTaskId = ref<number | null>(null);

    onMounted(() => {
      if (!taskStore.tasks.length) {
        taskStore.fetchTasks(); // Chỉ gọi API nếu chưa có dữ liệu
      }
    });

    const addTask = async () => {
      if (newTask.value.trim()) {
        await taskStore.addTask(newTask.value);
        newTask.value = '';
      }
    };

    const updateTask = async (task: Task) => {
      await taskStore.updateTask(task);
    };

    const deleteTask = async (id: number) => {
      await taskStore.deleteTask(id);
    };

    const editTask = (id: number) => {
      editingTaskId.value = id; // Set the task ID being edited
    };

    const saveUpdatedTask = async (task: Task) => {
      await updateTask(task);
      editingTaskId.value = null; // Exit edit mode after saving
    };

    const isEditingTask = (id: number) => {
      return editingTaskId.value === id;
    };

    return {
      tasks: taskStore.tasks,
      newTask,
      addTask,
      updateTask,
      deleteTask,
      isEditingTask,
      saveUpdatedTask,
      editTask,
    };
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
