// src/services/BaseProductManager.ts

import type { Product } from '@/models/Product'

abstract class BaseProductManager {
  abstract addProduct(product: Product): void
  abstract removeProduct(id: number): void
}

class ProductManager extends BaseProductManager {
  private products: Product[] = []

  addProduct(product: Product): void {
    this.products.push(product)
  }

  removeProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id)
  }

  getProducts(): Product[] {
    return this.products
  }
}
