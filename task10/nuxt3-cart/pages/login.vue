<template>
  <v-container>
    <v-form @submit.prevent="handleLogin">
      <v-text-field
        v-model="username"
        label="Tên đăng nhập"
        required
      />
      <v-text-field
        v-model="password"
        label="Mật khẩu"
        type="password"
        required
      />
      <v-btn type="submit" color="primary">Đăng nhập</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const fakeUsers = [
  { username: 'manh@gmail.com', password: '123456', name: 'User One' },
  { username: 'user2', password: 'password2', name: 'User Two' }
];

const handleLogin = () => {
  // Tìm kiếm người dùng từ dữ liệu giả
  const user = fakeUsers.find(
    user => user.username === username.value && user.password === password.value
  );

  if (user) {
    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem('user', JSON.stringify(user));
    // Chuyển hướng đến giỏ hàng
    alert(' dang nhap oke')
    router.push('/cart');
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
  }
};
</script>

<style scoped>
/* Thêm style tùy chỉnh nếu cần */
</style>
