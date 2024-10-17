<template>
  <div id="app" class="container mt-4">
    <nav class="mb-4">
      <router-link to="/" class="btn btn-primary me-2">Tất cả Công Việc</router-link>
      <router-link to="/completed" class="btn btn-success">Công Việc Đã Hoàn Thành</router-link>
    </nav>

    <!-- Router view để hiển thị các component -->
    <router-view />

    <!-- Thêm component để tạo task mới -->
    <AddTask v-if="$route.path==='/'"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddTask from './components/AddTask.vue';


export default defineComponent({
  components: {
    AddTask,
  },
});
</script>

<style scoped>
/* Optional: Customize the styling further if needed */
</style>
