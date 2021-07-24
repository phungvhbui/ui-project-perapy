<template>
  <footer>
    <div id="container">
      <div id="left-col">
        <img src="https://avatars.githubusercontent.com/u/47271466?s=48&v=4" />
        <h1>Perapy</h1>
        <div>@FitHCMUS - 18KTPM - Group06</div>
      </div>
      <div id="right-col">
        <div>Terms of service</div>
        <div>Liscense</div>
        <a><i class="fab fa-facebook-f"/></a>
        <a><i class="fab fa-google"/></a>
        <a><i class="fab fa-twitter"/></a>
        <a><i class="fab fa-slack"/></a>
        <a><i class="fas fa-phone-alt"/></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      message: "Footer",
    };
  },
};
</script>

<style scoped>
footer {
  /* Background */
  background-image: linear-gradient(
    to right,
    rgba(136, 96, 208, 0.5),
    rgba(86, 128, 233, 0.5)
  );

  /* Sizing */
  @apply w-full h-40;

  /* Positioning */
  @apply absolute bottom-0;
}

#container {
  /* Margin */
  @apply my-4 mx-12;

  /* Flex */
  @apply flex flex-row justify-between;
}

#left-col {
  /* Grid */
  @apply grid grid-cols-2 grid-rows-2;

  /* Margin */
  @apply mt-4;
}

#left-col img {
  /* Sizing */
  @apply w-16 h-16;

  /* Alignment */
  @apply self-center justify-self-center;
}

#left-col h1 {
  /* Alignment */
  @apply self-center;

  /* Text */
  @apply text-left text-2xl;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-bold;
}

#left-col div {
  /* Grid */
  @apply col-span-2;

  /* Text  */
  font-family: "Open Sans", sans-serif;
  @apply text-xs;

  /* Margin */
  @apply mt-4;

  /* Shadow */
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#right-col {
  /* Flex */
  @apply flex flex-row justify-between;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply text-lg font-bold;
}

@keyframes hoverOn {
  from {
    color: black;
  }
  to {
    color: white;
  }
}

@keyframes hoverOff {
  from {
    color: white;
  }
  to {
    color: black;
  }
}

#right-col div {
  /* Margin */
  @apply mr-6;

  /* Alignment */
  @apply self-center;

  /* Animation */
  animation-name: hoverOff;
  animation-duration: 0.2s;
}

#right-col a {
  /* Margin */
  @apply mr-6;

  /* Alignment */
  @apply self-center;

  /* Animation */
  animation-name: hoverOff;
  animation-duration: 0.2s;
}

#right-col div:hover {
  /* Cursor */
  @apply cursor-pointer;

  /* Color */
  color: white;

  /* Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;
}

#right-col a:hover {
  /* Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;

  /* Color */
  color: white;

  /* Cursor */
  @apply cursor-pointer;
}
</style>
