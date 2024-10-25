<template>
    <footer class="blog-footer">
      <div class="footer-content">
        <p>&copy; 2024 Blog của bạn. All rights reserved.</p>
        
        <div class="social-links">
          <a href="https://facebook.com" target="_blank">Facebook</a> |
          <a href="https://twitter.com" target="_blank">Twitter</a> |
          <a href="https://instagram.com" target="_blank">Instagram</a>
        </div>
        
        <p>Liên hệ: <a href="mailto:contact@yourblog.com">contact@yourblog.com</a></p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  .blog-footer {
    background-color: #f8f9fa;  /* Màu nền nhạt */
    padding: 30px 20px;          /* Khoảng cách trên/dưới và hai bên */
    text-align: center;          /* Căn giữa nội dung */
    font-size: 16px;             /* Kích thước chữ */
    color: #6c757d;              /* Màu chữ nhẹ nhàng */
    border-top: 1px solid #dee2e6; /* Đường viền trên */
    margin-top: 40px;            /* Khoảng cách giữa footer và nội dung phía trên */
    width: 100%;
  }
  
  .footer-content {
    max-width: 800px;            /* Giới hạn chiều rộng của nội dung */
    margin: 0 auto;              /* Căn giữa nội dung */
  }
  
  .social-links a {
    color: #007bff;              /* Màu liên kết xanh đậm */
    text-decoration: none;       /* Loại bỏ gạch chân */
    margin: 0 10px;              /* Khoảng cách giữa các liên kết */
  }
  
  .social-links a:hover {
    text-decoration: underline;  /* Gạch chân khi hover */
  }
  
  .footer-content p {
    margin: 10px 0;              /* Khoảng cách giữa các đoạn văn */
  }
  
  a {
    color: #007bff;              /* Màu liên kết */
    text-decoration: none;       /* Loại bỏ gạch chân */
  }
  
  a:hover {
    text-decoration: underline;  /* Gạch chân khi hover */
  }
  </style>
  