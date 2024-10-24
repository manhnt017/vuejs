import Product from '../model/product.js'

// Lấy tất cả sản phẩm
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

// Thêm sản phẩm mới
export const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(400).json({ message: 'Invalid product data' })
  }
}

// Cập nhật sản phẩm
export const updateProduct = async (req, res) => {
  const { id } = req.params
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.json(updatedProduct)
  } catch (error) {
    res.status(400).json({ message: 'Invalid product data' })
  }
}

// Xóa sản phẩm
export const deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    const deletedProduct = await Product.findByIdAndDelete(id)
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.json({ message: 'Product deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}
