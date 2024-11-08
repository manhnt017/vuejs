// plugins/cart.ts
import { defineNuxtPlugin } from '#app';
import { reactive } from 'vue';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default defineNuxtPlugin(nuxtApp => {
  // Đảm bảo plugin chỉ chạy trên client
  if (process.client) {
    const cart = reactive({
      items: JSON.parse(localStorage.getItem('cart') || '[]') as Product[],

      getCart() {
        return this.items;
      },

      addItem(product: Product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          this.items.push({ ...product, quantity: 1 });
        }
        this.saveCart();
      },

      removeItem(productId: string) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
      },

      updateQuantity(productId: string, quantity: number) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
          item.quantity = quantity;
          this.saveCart();
        }
      },

      saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
      },

      getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    });

    // Cung cấp cart vào app
    nuxtApp.provide('cart', cart);
  }
});
