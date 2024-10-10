<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="name" class="form-label">Product Name</label>
      <input type="text" id="name" class="form-control" v-model="formProduct.name" required />
    </div>

    <div class="mb-3">
      <label for="price" class="form-label">Price</label>
      <input
        type="number"
        id="price"
        class="form-control"
        v-model.number="formProduct.price"
        required
      />
    </div>

    <div class="mb-3">
      <label for="category" class="form-label">Category</label>
      <select v-model="formProduct.category" class="form-select" id="category" required>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="discountRate" class="form-label">Discount Rate</label>
      <input
        type="number"
        id="discountRate"
        class="form-control"
        v-model.number="formProduct.discountRate"
      />
    </div>

    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import type { Product } from '../models/Product'

export default defineComponent({
  props: {
    product: {
      type: Object as () => Product | null,
      required: true
    }
  },
  emits: ['saveProduct'],
  setup(props, { emit }) {
    const formProduct = ref<Omit<Product, 'id'>>({
      name: '',
      price: 0,
      category: 'Electronics',
      discountRate: 0
    })

    // Watch prop product để cập nhật form khi người dùng chọn sản phẩm để chỉnh sửa
    watch(
      () => props.product,
      (newProduct) => {
        if (newProduct) {
          formProduct.value = { ...newProduct } // Không bao gồm id
        } else {
          formProduct.value = {
            name: '',
            price: 0,
            category: 'Electronics',
            discountRate: 0
          }
        }
      },
      { immediate: true }
    )

    const submitForm = () => {
      emit('saveProduct', { ...formProduct.value }) // ID sẽ tự động được sinh ra khi thêm sản phẩm
    }

    return {
      formProduct,
      submitForm
    }
  }
})
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
</style>
