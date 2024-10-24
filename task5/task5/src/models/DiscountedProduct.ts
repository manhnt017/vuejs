// src/models/DiscountedProduct.ts

import type { Product, ProductCategory } from './Product'

export class DiscountedProduct implements Product {
  _id: string
  name: string
  price: number
  category: ProductCategory // Liên kết với ProductCategory
  discountRate: number

  constructor(
    _id: number,
    name: string,
    price: number,
    category: ProductCategory,
    discountRate: number
  ) {
    this._id = _id.toString()
    this.name = name
    this.price = price
    this.category = category
    this.discountRate = discountRate
  }

  getDiscountedPrice(): number {
    return this.price - (this.price * this.discountRate) / 100
  }
}
