<template>
    <nav class="toolbar">
        <span class="navicon">
            <i class="fa fa-bars"></i>
        </span>
        <span class="searchbox">
            <input class="searchfield" type="text" v-model="search" placeholder="Search products..."/>
            <i class="icon fas fa-search"></i>
        </span>
    </nav>
    
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    }
}
</script>

<style scoped>
.toolbar {
    /* Alignment */
    @apply justify-center;

    /* Margin */
    @apply mx-4 mt-16;
}

.navicon {
    /* Position */
    @apply absolute left-12;
}

.searchbox {
    /* Font */
    font-family: "Quicksand", sans-serif;

    /* Position */
    @apply relative;
}

.searchfield {
    /* Size */
    @apply w-96;

    /* Border */
    @apply border-black border-2 rounded-3xl;

    /* Padding */
    @apply px-2;

    /* Text Indent */
    @apply pl-8;
}

.icon {
    /* Position */
    @apply absolute left-2 top-0.5;
}

@keyframes hoverOn {
  from {
    color: black;
  }
  to {
    color: gray;
  }
}
@keyframes hoverOff {
  from {
    color: gray;
  }
  to {
    color: black;
  }
}

.navicon:hover {
    /* Cursor */
  @apply cursor-pointer;
  
  /* Color */
  color: gray;

  /* Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;
}

.navicon {
    /* Cursor */
  @apply cursor-pointer;
  
  /* Color */
  color: black;

  /* Animation */
  animation-name: hoverOff;
  animation-duration: 0.2s;
}
</style>