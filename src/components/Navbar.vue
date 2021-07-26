<template>
    <header>
        <nav class="navbar">
            <div class="header-container">
                <div class="logo">
                    <h1>Perapy</h1>
                </div>
                <div class="topics">
                    <div>Home</div>
                    <div>Pet Therapy</div>
                    <div>Products</div>
                    <div>Services</div>
                </div>
                <div class="userPref">
                    <a><img src="https://i.pinimg.com/originals/f6/70/a8/f670a8875997412b46cea057e2ba7aae.png"></a>
                    <div class="dropdown">
                        <i class="fas fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            message: "Navbar",
        };
    },
};
</script>

<style scoped>

.navbar {
    /**Background */
    background-image: linear-gradient(
        to right,
        rgba(136, 96, 208, 0.5), 
        rgba(86, 128, 233, 0.5)
    );

    /**Size */
    @apply w-full h-16;

    /**Position */
    @apply absolute top-0;
}

.header-container {
    /**Margin */
    @apply my-2 mx-2;

    /**Flex */
    @apply flex justify-between; 
}

.logo h1{
    /**Alignment */
    @apply self-center;

    /**Text */
    @apply text-left text-4xl;
    
    /**Font */
    font-family: "Quicksand", sans-serif;
}

.topics {
    /**Flex */
    @apply flex flex-row items-center;
}

.topics div {
    /**Grid */
    @apply col-span-1;

    /**Text */
    font-family: "Open Sans", sans-serif;
    @apply text-2xl;

    /**Margin */
    @apply mx-20 my-2;
}

.userPref {
    /**Flex */
    @apply flex items-center;
}

.userPref a img {
    /**Sizing */
    @apply w-9 h-9 rounded-full;

    /**Alignment */
    @apply self-center;
}

.userPref .dropdown {
    /**Margin */
    @apply mx-2;
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

.topics div:hover {
  /**Cursor */
  @apply cursor-pointer;
  
  /**Color */
  color: gray;

  /**Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;
}

.userPref div:hover {
  /**Cursor */
  @apply cursor-pointer;
  
  /**Color */
  color: gray;

  /**Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;
}
</style>