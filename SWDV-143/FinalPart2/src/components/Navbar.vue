<template>
    <nav class="navbar">
      <div class="container">
        <a href="#" class="brand">Empyrean Coven Studios</a>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#games">Our Games</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>
  <script>
  export default {
    name: 'Navbar'
  };
  </script>
  <style scoped>
  .navbar {
    background-color: #333;
    color: white;
    padding: 10px 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .nav-links {
    list-style: none;
    display: flex;
  }
  .nav-links li {
    margin-left: 20px;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
  }
  </style>