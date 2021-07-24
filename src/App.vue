<template>
  <div class="app">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I'm from vue file",
    };
  },
};
</script>

<style scoped>
.app {
  text-align: center;
}
</style>
