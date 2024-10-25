// stores/blogStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Post } from '../types/types';
import axios from 'axios';

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<Post[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchPosts = async () => {
    loading.value = true;
    error.value = null;
  
    try {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      posts.value = response.data;
    } catch (err) {
      error.value = 'Error fetching posts';
      console.error('Error fetching posts:', err);
    } finally {
      loading.value = false;
    }
  };

  const fetchPostById = async (id: string) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response.data;
    } catch (err) {
      error.value = 'Error fetching post';
      console.error(err);
      throw err; // Propagate error
    } finally {
      loading.value = false;
    }
  };

  return { posts, loading, error, fetchPosts, fetchPostById };
});
