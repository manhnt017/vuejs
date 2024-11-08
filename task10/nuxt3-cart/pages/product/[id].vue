<template>
  <v-container>
    <v-row v-if="product">
      <v-col cols="12" md="6">
        <v-img :src="product.image" height="400px" />
      </v-col>
      <v-col cols="12" md="6">
        <h1>{{ product.name }}</h1>
        <p><strong>Price:</strong> ${{ product.price }}</p>
        <p><strong>Category:</strong> {{ product.category }}</p>
        <p>{{ product.description }}</p>
        <v-btn class="bg-primary" @click="cartStore.add(product.id)">
          Add to Cart
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-alert type="error" dismissible> Product not found! </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useCartStore } from "@/stores/cart";
import data from "@/data";

const route = useRoute();
const cartStore = useCartStore();
const product = ref(null);

onMounted(() => {
  const productId = route.params.id;
  product.value = data.find((item) => item.id === productId);
  if (!product.value) {
    const router = useRouter();
    router.push("/");
  }
});
</script>
