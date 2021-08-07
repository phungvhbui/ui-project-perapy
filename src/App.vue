<template>
  <div id="app" class="app">
    <!-- <Navbar /> -->
    <PetRequestCard v-bind:petData="petData" />
    <!-- <Footer /> -->
  </div>
</template>


<script>

// import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";
// import Cart from "./page/Cart.vue";
// import ProductDetail from "./page/ProductDetail.vue";
// import ProductList from "./page/ProductList.vue";
import PetRequestCard from './components/petinfo/PetRequestCard.vue'

export default {
  components: {
    // Navbar,
    // Footer,
    // ProductDetail,
    // Cart,
    // ProductList,
    PetRequestCard,
  },
  data() {
    return {
      petData: {
        type: "Dog",
        breed: "Samoyed",
        name: "Charlotte",
        patients: 5,
        certificates: 6,
        treatments: 5
      }
    };
  },
};

</script>


<style scoped>

/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.app {
  @apply overflow-auto;
}

.content {
  @apply mt-32;
}

</style>
