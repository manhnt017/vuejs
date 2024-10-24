<template>
  <div id="app">
    <nav>
      <router-link to="/">All Tasks</router-link>
      <router-link to="/completed">Completed Tasks</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
}
</style>
