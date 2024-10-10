<template>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Discount Rate</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="index">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.discountRate }}%</td>
        <td>
          <button class="btn btn-warning me-2" @click="$emit('editProduct', product)">Edit</button>
          <button class="btn btn-danger" @click="$emit('deleteProduct', index)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Product } from '../models/Product'

export default defineComponent({
  props: {
    products: {
      type: Array as () => Product[],
      required: true
    }
  },
  emits: ['editProduct', 'deleteProduct']
})
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>
