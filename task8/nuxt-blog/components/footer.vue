<template>
    <footer class="blog-footer">
      <div class="footer-content">
        <p>&copy; 2024/10/inter/task8</p>
        
        <div class="social-links">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        
        <p>Liên hệ: <a href="mailto:contact@yourblog.com">contact@yourblog.com</a></p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: #f8f9fa; /* Màu nền footer */
  }
  
  .social-links {
    margin: 10px 0;
  }
  
  .social-links a {
    margin: 0 10px;
    color: #007bff; /* Màu sắc biểu tượng */
    text-decoration: none;
    font-size: 24px; /* Kích thước biểu tượng */
  }
  
  .social-links a:hover {
    color: #0056b3; /* Màu sắc khi hover */
  }
  </style>
  