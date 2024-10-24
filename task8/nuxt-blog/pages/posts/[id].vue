<template>
    <div v-if="post" class="container mt-4">
      <h1 class="display-4 text-center mb-4">{{ post.title }}</h1>
      <img :src="post.image" :alt="post.title" class="img-fluid rounded shadow" />
      <p class="mt-3 text-muted">{{ post.summary }}</p>
      <div v-html="post.content" class="mt-4 border p-3 rounded bg-light shadow-sm"></div>
      <nuxt-link class="btn btn-primary mt-4 " to="/">Quay lại danh sách</nuxt-link>
    </div>
    <div v-else class="container mt-4 text-center">
      <p class="text-muted">Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import posts from '@/data/posts'; // Nhập dữ liệu từ tệp posts.js
  
  // Lấy id từ route params
  const route = useRoute();
  const id = parseInt(route.params.id);
  
  // Tìm bài viết dựa trên ID
  const post = posts.find((p) => p.id === id);
  </script>
  
  <style scoped>
  /* Thêm CSS nếu cần */
  .card {
    border: none;
  }
  </style>
  