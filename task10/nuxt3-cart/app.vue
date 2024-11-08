<template>

  <v-app id="inspire" :theme="useCartStore().getTheme">
     <div v-if="isLoading" class="spinner-overlay">
      <v-progress-circular indeterminate color="primary" size="70"></v-progress-circular>
    </div>
    <!-- Header -->
    <Header />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useCartStore } from './stores/cart';

import { ref, onMounted } from 'vue';

const isLoading = ref(true);

// Khi trang được tải xong, ẩn spinner
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500); // Spinner hiển thị trong 2 giây (có thể điều chỉnh thời gian)
});

</script>

<style scoped>
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>