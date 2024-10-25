<script setup lang="ts">
import { useSeoMeta } from '#app';
import { useBlogStore } from '@@/store/blogStore';
import { onMounted } from 'vue';

// Khởi tạo store
const blogStore = useBlogStore();

// Gọi hàm fetchPosts để lấy danh sách bài viết khi component được khởi tạo
await blogStore.fetchPosts();

// Cài đặt SEO Meta
onMounted(async () => {
  await blogStore.fetchPosts();
  useHead({
    title: "My Blog",
    meta: [
      { name: 'description', content: "Welcome to my blog!" },
      { property: 'og:title', content: "My Blog" },
      { property: 'og:description', content: "Welcome to my blog!" },
      { property: 'og:image', content: "/nuxt-blog-hero.png" },
      { property: 'og:url', content: `http://localhost:3000` },
      { name: 'twitter:title', content: "My Blog" },
      { name: 'twitter:description', content: "Welcome to my blog!" },
      { name: 'twitter:image', content: "/nuxt-blog-hero.png" },
      { name: 'twitter:card', content: "summary" },
    ]
  });
});
</script>

<template>
  <main class="bg-gray-100 min-h-screen py-8">
    <section class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-center mb-8 text-blue-600">Blog Posts</h1>
      
      <!-- Hiển thị trạng thái loading -->
      <div v-if="blogStore.loading" class="text-center">
        <p class="text-xl text-gray-600">Đang tải...</p>
      </div>

      <!-- Hiển thị danh sách bài viết -->
      <div v-if="!blogStore.error && !blogStore.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="post in blogStore.posts" :key="post.id" class="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6">
          <h2 class="text-2xl font-semibold mb-2 text-gray-800">{{ post.title }}</h2>
          <p class="text-gray-700 mb-4">{{ post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body }}</p>
          <NuxtLink :to="`/posts/${post.id}`" class="text-blue-500 hover:text-blue-700 underline">Read more</NuxtLink>
        </div>
      </div>

      <!-- Hiển thị thông báo lỗi nếu có -->
      <p v-else class="text-xl text-red-600 text-center">Oops, something went wrong. Please try again later.</p>
    </section>
  </main>
</template>

<style scoped>
/* Thêm các style tùy chỉnh tại đây */
h1 {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.bg-white {
  transition: transform 0.3s ease;
}

.bg-white:hover {
  transform: translateY(-2px);
}
</style>
