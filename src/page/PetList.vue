<template>
  <div>
    <Searchbar />
    <PetRequestList />
    <Pagination />
  </div>
</template>

<script>
import PetRequestList from "@/components/pet/PetRequestList.vue";
import Searchbar from "@/components/ui/Toolbar";
import Pagination from "@/components/ui/Pagination";
export default {
  name: "Pet",
  components: {
    PetRequestList,
    Searchbar,
    Pagination,
  },
};
</script>

<style scoped></style>
