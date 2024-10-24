<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <i class="fa-solid fa-house"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/blog">
                <i class="fas fa-pencil-alt"></i> Blog
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              <i class="fas fa-search"></i> 
            </button>
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .navbar-nav .nav-link {
    display: flex;
    align-items: center; /* Căn giữa biểu tượng và văn bản */
  }
  
  .navbar-nav .nav-link i {
    margin-right: 5px; /* Khoảng cách giữa biểu tượng và văn bản */
  }
  </style>
  