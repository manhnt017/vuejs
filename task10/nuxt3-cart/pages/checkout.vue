<template>
  <div class="py-6">
    <v-row>
      <v-col md="8">
        <!-- Order Form -->
        <v-card class="py-5 px-4">
          <v-card-title class="mb-5">Checkout</v-card-title>
          <v-form v-model="valid" ref="form" @submit.prevent="submitOrder">
            <v-card-text>
              <!-- Thông tin người dùng -->
              <v-text-field
                v-model="userInfo.name"
                label="Full Name"
                required
                :rules="[rules.required]"
              />
              <v-text-field
                v-model="userInfo.email"
                label="Email Address"
                required
                :rules="[rules.required, rules.email]"
              />
              <v-textarea
                v-model="userInfo.address"
                label="Shipping Address"
                required
                :rules="[rules.required]"
              />
              <v-text-field
                v-model="userInfo.phone"
                label="Phone Number"
                required
                :rules="[rules.required]"
              />
            </v-card-text>

            <!-- Order Summary -->
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col sm="6" v-for="item in cartStore.formattedCart" :key="item.id">
                  <div class="d-flex align-center no-wrap">
                    <img
                      style="width: 50px; height: 50px; object-fit: cover"
                      :src="item.image"
                      alt="item image"
                    />
                    <div class="ml-3">
                      <h4>{{ item.name }}</h4>
                      <p>{{ item.quantity }} x ${{ item.price }} = ${{ item.cost }}</p>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <div class="d-flex justify-space-between py-3">
                <p class="ma-0">Subtotal</p>
                <p class="text-primary">${{ cartStore.total }}</p>
              </div>
              <div class="d-flex justify-space-between">
                <p class="ma-0">Shipping</p>
                <p class="text-primary">Free</p>
              </div>
              <div class="d-flex justify-space-between py-3">
                <p class="ma-0">Order Total</p>
                <p class="text-primary">${{ cartStore.total }}</p>
              </div>
            </v-card-text>

            <!-- Submit -->
            <v-btn color="primary" block :disabled="!valid" @click="submitOrder">
              Place Order
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal for Order Confirmation -->
    <v-dialog v-model="showDialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Order Placed</span>
        </v-card-title>
        <v-card-text class="d-flex justify-center align-center">
          <v-progress-circular
            v-if="loading"
            indeterminate
            color="primary"
            size="64"
            width="6"
          ></v-progress-circular>
          <div v-else>
            <v-icon color="green">mdi-check-circle</v-icon>
            <p class="mt-3">Thank you for your order! We will contact you soon.</p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useCartStore } from '../stores/cart.js';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

const valid = ref(false); // Flag xác thực form
const userInfo = ref({
  name: '',
  email: '',
  address: '',
  phone: ''
});
const showDialog = ref(false); // Flag để hiển thị dialog
const loading = ref(false); // Flag cho spinner (dấu tích xoay tròn)

// Rules for form validation
const rules = {
  required: value => !!value || 'This field is required',
  email: value => /.+@.+/.test(value) || 'Please enter a valid email address',
};

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    router.push('/login');
    alert('Please login to proceed with checkout');
  }
});

// Hàm gửi đơn hàng
const submitOrder = () => {
  if (valid.value) {
    // Hiển thị dấu tích xoay tròn
    loading.value = true;

    // Giả lập gửi đơn hàng và chờ một thời gian trước khi hiển thị kết quả
    setTimeout(() => {
      console.log('Order Details:', { ...userInfo.value, cart: cartStore.cartContent });

      // Sau khi gửi đơn hàng xong
      cartStore.cartContent = {}; // Clear cart after successful order
      loading.value = false; // Ẩn dấu tích xoay tròn
      showDialog.value = true; // Hiển thị modal cảm ơn
    }, 2000); // Giả lập 2 giây xử lý
  }
};

// Hàm đóng modal
const closeDialog = () => {
  showDialog.value = false;
  router.push('/'); // Quay lại trang chủ hoặc trang khác nếu muốn
};
</script>
