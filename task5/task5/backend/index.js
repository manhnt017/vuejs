import express from 'express'
import cors from 'cors' // Đảm bảo bạn đã import cors
import mongoose from 'mongoose'
import productRoutes from './routes/product.js'

const app = express() // Khởi tạo app trước khi sử dụng

// Middleware
app.use(cors())
app.use(express.json())

// Định tuyến cho API sản phẩm
app.use('/products', productRoutes)

// Kết nối MongoDB
mongoose
  .connect('mongodb://localhost:27017/productsdb')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

// Khởi động server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
