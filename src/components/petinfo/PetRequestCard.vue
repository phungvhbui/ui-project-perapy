<template> 

<div class="card-container">
  <div class="image-container">
    <img class="pet-image" src="..\..\assets\pet-images\pet-1.jpg" alt="ChitChat Logo">
  </div>

  <div class="information-container">
    <div class="information-pet-type">
      Animal type - Breed
    </div>
    <div class="information-pet-name">
      Name
    </div>
    <div class="information-pet-description">
      Placeholder
    </div>
  </div>
  
  <a href="">
    <div class="detail-container">
    
    </div>
  </a>
</div>

</template>


<script>

export default {
  name: "PetRequestCard",
  props: ['pet-data']
};

</script>


<style scoped>

.card-container {
  /* Display */
  @apply flex;
  @apply flex-col;

  /* Layout */
  @apply max-w-max max-h-full;
  @apply justify-between;
  @apply items-center;
  @apply space-y-2;

  /* Shape */
  @apply rounded-3xl;

  /* BG Color */
  background-color: #FBF9F9;

  /* Padding */
  @apply p-5;

  /* Margin */
  @apply mx-auto;
}


.image-container {  
  /* Display */
  @apply flex-shrink;
  
  /* Layout */
  @apply max-w-full;
}

.pet-image {
  /* Display: Image content */
  @apply object-cover;
  
  /* Layout */
  @apply w-56 h-36;

  /* Shape */
  @apply rounded-3xl;
}


.information-container {
  /* Layout */
  @apply w-full;
  
  /* Alignment */
  @apply text-left;

  /* Margin */
  @apply mx-0;
}

.information-title {
  /* Size */
  @apply text-xl;

  /* Color */
  @apply  text-black;
  
  /* Styles */
  @apply font-medium;
}

.information-subtitle {
  /* Color */
  @apply text-gray-500
}

</style>