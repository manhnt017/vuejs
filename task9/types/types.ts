// Định nghĩa kiểu cho một bài viết (Post)
export interface Post {
  id: number;
  title: string;
  body: string;
}


// Định nghĩa kiểu phản hồi khi gọi API danh sách bài viết
export interface PostResponse {
  posts: Post[];
  total: number; // Tổng số bài viết
  skip: number; // Số lượng bài viết đã bỏ qua (pagination)
  limit: number; // Giới hạn số lượng bài viết trên mỗi trang
}
