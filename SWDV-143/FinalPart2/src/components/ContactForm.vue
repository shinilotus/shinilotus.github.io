<template>
    <section id="contact" class="contact-form">
      <h2>Contact Us</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  </template>
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted:', { name: this.name, email: this.email, message: this.message });
      }
    }
  };
  </script>
  <style scoped>
  .contact-form {
    padding: 50px 0;
    text-align: center;
  }
  .contact-form h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 1rem;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .form-group textarea {
    height: 150px;
  }
  button {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #555;
  }
  </style>