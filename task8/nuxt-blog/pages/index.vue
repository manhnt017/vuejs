<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Danh sách blog</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="post in posts" :key="post.id">
        <div class="card">
          <img :src="post.image" :alt="post.title" class="card-img-top" style="height: 200px; object-fit: cover;" />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.summary }}</p>
            <nuxt-link class="btn btn-primary" :to="'/posts/' + post.id">Xem chi tiết</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import posts from "@/data/posts";

export default {
  data() {
    return {
      posts,
    };
  },
};
</script>

<style scoped>
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
  color: #555;
}
</style>
