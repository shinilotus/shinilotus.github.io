<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <GamesSection />
    <ContactForm />
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import GamesSection from './components/GamesSection.vue';
import ContactForm from './components/ContactForm.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    GamesSection,
    ContactForm,
    Footer
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}
</style>