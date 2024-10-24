import axios from 'axios'
import type { Product } from '../models/Product'

export class ProductManager {
  private apiUrl = 'http://localhost:3000/products'

  async getProducts(): Promise<Product[]> {
    const response = await axios.get(this.apiUrl)
    return response.data
  }

  async addProduct(product: Product): Promise<void> {
      await axios.post(this.apiUrl, product)
   
  }

  async updateProduct(id: string, product: Product): Promise<void> {
    await axios.put(`${this.apiUrl}/${id}`, product)
  }

  async removeProduct(index: number): Promise<void> {
    const products = await this.getProducts()
    const productId = products[index]._id // Lấy ID sản phẩm từ danh sách
    await axios.delete(`${this.apiUrl}/${productId}`)
  }
}
