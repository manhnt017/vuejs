<template>
  <v-app-bar :theme="theme">
    <v-toolbar-title 
    @click="$router.push('/')">
      Shopping Website
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Giỏ hàng -->
    <v-btn @click="$router.push('/Cart')" class="text-none" stacked>
      <v-badge :content="cartStore.productsTotal" color="error">
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>

    <!-- Biểu tượng người dùng (dẫn đến trang đăng nhập) -->
    <v-btn @click="$router.push('/login')" class="text-none">
      <v-icon>mdi-account</v-icon> <!-- Biểu tượng người dùng -->
    </v-btn>

    <!-- Nút chuyển đổi theme -->
    <v-btn
      :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
      @click="cartStore.toggleTheme()"
    >
      Toggle Theme
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
defineProps({
  theme: {
    type: String,
    default: 'light', // giá trị mặc định
  },
});
</script>

<style lang="scss" scoped>
</style>
