<script setup lang="ts">
import { useRoute, useSeoMeta } from '#app';
import { useBlogStore } from '~~/store/blogStore';

const route = useRoute();
const postId = route.params.id as string;

const blogStore = useBlogStore();
const loading = ref(true); // Biến trạng thái loading
const error = ref<string | null>(null); // Biến lưu thông báo lỗi

// Gọi hàm fetchPostById khi component được khởi tạo
const post = await blogStore.fetchPostById(postId);

// Cài đặt SEO Meta
onMounted(async () => {
  try {
    // Cài đặt SEO Meta
    useHead({
      title: post.title,
      meta: [
        { name: 'description', content: post.body },
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.body },
        { property: 'og:url', content: `http://localhost:3000/posts/${post.id}` },
        { name: 'twitter:title', content: post.title },
        { name: 'twitter:description', content: post.body },
      ]
    });
  } catch (error) {
    console.error("Error fetching post:", error);
  } finally {
    loading.value = false; // Kết thúc trạng thái loading
  }
});
</script>

<template>
  <div class="flex flex-col max-w-screen-lg mx-auto p-6 bg-white rounded-lg shadow-lg my-10">
    <div v-if="loading" class="text-center py-10">
      <p class="text-xl text-gray-700">Loading...</p>
    </div>
    
    <div v-if="error" class="text-center py-10">
      <p class="text-xl text-red-600">{{ error }}</p>
    </div>

    <div v-if="post" class="flex flex-col mb-6">
      <h2 class="text-5xl mb-4 font-bold text-blue-600">- Title: {{ post.title }}</h2>
      <p class="text-xl text-gray-700 mb-6">- Body: {{ post.body }}</p>
      <hr class="my-4" />
    </div>
  </div>
</template>
