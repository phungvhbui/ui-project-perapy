<template>
  <div id="app" class="app">
    <Navbar/>
    <Toolbar/>
    <Pagination/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Toolbar from './components/Toolbar.vue'
import Pagination from './components/Pagination.vue'

export default {
  components: {
    Navbar, Footer, Toolbar, Pagination
  },
  data() {
    return {
      crumbs: [
        'Home', 'Category', 'Sub Category'
      ]
    }
  },
};
</script>


<style scoped>

/* Fonts */
/* @font-face {
    font-family: Open-Sans-Regular;
    src: url-loader("../assets/fonts/OpenSans-Regular.ttf") format('truetype');
}

@font-face {
    font-family: Quicksand-Regular;
    src: url-loader("../assets/fonts/Quicksand-Regular.ttf") format('truetype');
} */
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.app {
  @apply text-center;
  @apply overflow-auto;
  @apply h-full;
}

/* SCROLL BAR */
::-webkit-scrollbar {
  width: 0.6rem;
  background-color: var(--scroll-bar-color);
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scroll-thumb-color);
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--text-color-light);
}
</style>
