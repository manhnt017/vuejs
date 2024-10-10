// src/models/Product.ts
export interface Product {
  id: number
  name: string
  price: number
  category: ProductCategory
  discountRate: number
}

export type ProductCategory = 'Electronics' | 'Books' | 'Clothing' | 'Food'
