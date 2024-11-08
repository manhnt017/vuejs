// import { defineStore } from "pinia";

// import products from "~~/data";

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     cartContent: {},
//     theme: "light",
//   }),
//   getters: {
//     formattedCart() {
//       return Object.keys(this.cartContent).map((productId) => {
//         const product = this.cartContent[productId];

//         return {
//           id: product.productId,
//           image: products.find((p) => p.id === product.productId).image,
//           name: products.find((p) => p.id === product.productId).name,
//           price: products.find((p) => p.id === product.productId).price,
//           quantity: product.quantity,
//           cost:
//             product.quantity *
//             products.find((p) => p.id === product.productId).price,
//         };
//       });
//     },
//     total() {
//       return Object.keys(this.cartContent).reduce((acc, id) => {
//         const product = products.find((p) => p.id === id);
//         if (product) {
//           return acc + product.price * this.cartContent[id].quantity;
//         }
//         return acc + 0;
//       }, 0);
//     },
//     productsTotal() {
//       return Object.keys(this.cartContent).reduce((acc, id) => {
//         return acc + this.cartContent[id].quantity;
//       }, 0);
//     },
//     getTheme() {
//       return this.theme;
//     },
//   },
//   actions: {
//     add(productId) {
//       if (this.cartContent.hasOwnProperty(productId)) {
//         this.cartContent[productId] = {
//           productId,
//           quantity: this.cartContent[productId].quantity + 1,
//         };
//       } else {
//         this.cartContent[productId] = {
//           productId,
//           quantity: 1,
//         };
//       }
//     },
//     remove(productId) {
//       if (!this.cartContent[productId]) {
//         return;
//       }
//       this.cartContent[productId].quantity -= 1;

//       if (this.cartContent[productId].quantity === 0) {
//         delete this.cartContent[productId];
//       }
//     },
//     removeProduct(productId) {
//       delete this.cartContent[productId];
//     },
//     toggleTheme() {
//       this.theme = this.theme === "light" ? "dark" : "light";
//     },
//   },
// });


import { defineStore } from "pinia";
import products from "~~/data";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartContent: {},
    theme: "light",
  }),
  getters: {
    // Định dạng lại giỏ hàng với các thông tin chi tiết của từng sản phẩm
    formattedCart() {
      return Object.keys(this.cartContent).map((productId) => {
        const product = this.cartContent[productId];
        const productDetails = products.find((p) => p.id === product.productId);

        return {
          id: product.productId,
          image: productDetails?.image,
          name: productDetails?.name,
          price: productDetails?.price,
          quantity: product.quantity,
          cost: product.quantity * productDetails?.price,
        };
      });
    },
    // Tổng tiền của giỏ hàng
    total() {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        const product = products.find((p) => p.id === id);
        return product ? acc + product.price * this.cartContent[id].quantity : acc;
      }, 0);
    },
    // Tổng số lượng sản phẩm trong giỏ hàng
    productsTotal() {
      return Object.keys(this.cartContent).reduce((acc, id) => acc + this.cartContent[id].quantity, 0);
    },
    getTheme() {
      return this.theme;
    },
  },
  actions: {
    // Thêm sản phẩm vào giỏ hàng
    add(productId) {
      if (this.cartContent.hasOwnProperty(productId)) {
        this.cartContent[productId].quantity += 1;
      } else {
        this.cartContent[productId] = { productId, quantity: 1 };
      }
    },
    // Xóa bớt một sản phẩm trong giỏ hàng
    remove(productId) {
      if (!this.cartContent[productId]) return;
      this.cartContent[productId].quantity -= 1;

      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId];
      }
    },
    // Xóa hẳn một sản phẩm khỏi giỏ hàng
    removeProduct(productId) {
      delete this.cartContent[productId];
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
});
