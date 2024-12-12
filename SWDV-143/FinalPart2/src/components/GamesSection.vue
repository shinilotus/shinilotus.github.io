<template>
    <section id="games" class="games-section">
      <h2 class="section-title">Our Games</h2>
      <div class="games-container">
        <div class="game-card" v-for="(game, index) in games" :key="index">
          <img :src="`/images/${game.image}`" :alt="game.title" />
          <div class="game-info">
            <h3>{{ game.title }}</h3>
            <p>{{ game.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  export default {
    name: 'GamesSection',
    data() {
      return {
        games: [
          {
            title: 'Adventure Quest',
            description: 'Embark on an epic journey in this action-packed 2.5D adventure game.',
            image: 'game1.jpg'
          },
          {
            title: 'Shadow Realm',
            description: 'A haunting 2.5D platformer filled with mystery and danger.',
            image: 'game2.jpg'
          },
          {
            title: 'Pixel Pioneers',
            description: 'Build, explore, and survive in a unique 2.5D open-world sandbox.',
            image: 'game3.jpg'
          }
        ]
      };
    }
  };
  </script>
  <style scoped>
  .games-section {
    padding: 50px 0;
    text-align: center;
  }
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
  .games-container {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    flex-wrap: wrap;
  }
  .game-card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  .game-card img {
    width: 100%;
    height: auto;
  }
  .game-info {
    padding: 15px;
  }
  .game-info h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .game-info p {
    font-size: 1rem;
    color: #555;
  }
  </style>