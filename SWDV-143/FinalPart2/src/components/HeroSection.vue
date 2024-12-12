<template>
    <section id="home" class="hero-section">
      <div class="hero-content">
        <h1>Welcome to Empyrean Coven Studios</h1>
        <p>Your journey into the world of 2.5D indie games starts here.</p>
      </div>
    </section>
  </template>
  <script>
  export default {
    name: 'HeroSection'
  };
  </script>
  <style scoped>
  .hero-section {
    background-image: url('/images/background.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 100px 0;
  }
  .hero-content h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  .hero-content p {
    font-size: 1.25rem;
  }
  </style>