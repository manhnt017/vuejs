<template>
  <div id="app">
    <h1>Task5</h1>
    <product-form :product="selectedProduct" @saveProduct="handleSaveProduct" />
    <product-list
      :products="products"
      @editProduct="handleEditProduct"
      @deleteProduct="handleDeleteProduct"
    />
  
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import ProductForm from './components/ProductForm.vue'
import ProductList from '@/components/ProductList.vue'
import { ProductManager } from './services/ProductManager'
import type { Product } from './models/Product'

export default defineComponent({
  components: {
    ProductForm,
    ProductList
  },
  setup() {
    const productManager = new ProductManager()
    const products = ref<Product[]>([])
    const selectedProduct = ref<Product | null>(null)

    // Tải danh sách sản phẩm từ db.json khi ứng dụng khởi động
    const loadProducts = async () => {
      products.value = await productManager.getProducts()
    }

    onMounted(() => {
      loadProducts()
    })

    // Lưu hoặc cập nhật sản phẩm
    const handleSaveProduct = async (product: Product) => {
      if (!product._id) {
        await productManager.addProduct(product)
      } else {
        await productManager.updateProduct(product._id, product)
      }
      await loadProducts()
      selectedProduct.value = null // Reset form
    }

    // Xử lý chọn sản phẩm để sửa
    const handleEditProduct = (product: Product) => {
      selectedProduct.value = { ...product } // Sao chép sản phẩm để tránh thay đổi trực tiếp
    }

    // Xóa sản phẩm
    const handleDeleteProduct = async (id: number) => {
      await productManager.removeProduct(id)
      await loadProducts() // Cập nhật danh sách sau khi xóa
    }

    return {
      products,
      selectedProduct,
      handleSaveProduct,
      handleEditProduct,
      handleDeleteProduct
    }
  }
})
</script>

<style scoped>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
