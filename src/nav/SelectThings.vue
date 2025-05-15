<template>
  <div class="container">
    <the-button>
      <router-link to="/ingredient" class="changeFont">Ingredient</router-link>
    </the-button>
    <the-button>
      <router-link to="/recipe" class="changeFont"
        >Recipe</router-link
      ></the-button
    >
    <!-- <the-button v-if="addThing === 'addRecipe'">
      <router-link to="/addRecipe">Add Recipe </router-link></the-button
    >
    <the-button v-else>
      <router-link to="/addIngredient">Add Ingredient </router-link></the-button
    > -->
    <the-button>
      <router-link
        class="changeFont"
        :to="currentRoute === '/addRecipe' ? '/addIngredient' : '/addRecipe'"
      >
        Add {{ currentRoute === "/addRecipe" ? "Ingredient" : "Recipe" }}
      </router-link>
    </the-button>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.changeFont {
  font-family: "koho", serif;
}
.container {
  padding: 10px 0;
  position: sticky;
  top: 80px;
  z-index: 100;
  background-color: #2980b9;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 5.5rem;
  width: 100%;
  justify-content: center;
}
router-link {
  font-family: "koho", serif;
}
@media (max-width: 700px) {
  .container {
    gap: 0.5rem;
    width: 100%;
  }
}
a {
  display: inline-flex;
  justify-content: center;
  width: 160px;
  color: whitesmoke;
  text-decoration: none;
}
</style>
