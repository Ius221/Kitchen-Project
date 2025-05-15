<template>
  <router-view />
</template>

<script>
import AddFood from "./AddFood.vue";
import AddIngredient from "./AddIngredient.vue";

export default {
  components: { AddFood, AddIngredient },
  data() {
    return {
      currentFile: "food",
    };
  },
  methods: {
    switchAdd(val) {
      this.currentFile = val;
    },
  },
};
</script>

<style scoped>
.parent-div {
  margin-left: 10%;
  max-width: 80%;
}
</style>
