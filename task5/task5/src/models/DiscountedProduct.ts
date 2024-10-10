// src/models/DiscountedProduct.ts

import type { Product, ProductCategory } from './Product'

export class DiscountedProduct implements Product {
  id: number
  name: string
  price: number
  category: ProductCategory // Liên kết với ProductCategory
  discountRate: number

  constructor(
    id: number,
    name: string,
    price: number,
    category: ProductCategory,
    discountRate: number
  ) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
    this.discountRate = discountRate
  }

  getDiscountedPrice(): number {
    return this.price - (this.price * this.discountRate) / 100
  }
}
