<template>
  <div>
    <Header/>
    <!-- Thay thế <RouterView /> bằng <NuxtPage /> -->
    <NuxtPage />
    <Footer/>

  </div>
</template>

<script>
import Footer from '~/components/footer.vue';
import Header from '~/components/header.vue';

export default {
  components:{
    Header,
    Footer
  }
}

</script>
<style>
header {
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
}

footer {
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
}
</style>
