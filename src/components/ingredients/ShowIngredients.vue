<template>
  <div class="parentDiv">
    <div class="firstChild">
      <h1>Your Cooking Ingredients</h1>

      <!-- Example Ingredient 1 -->
      <center>
        <p v-if="isLoading">Loading...</p>
      </center>

      <div
        class="ingredient-container"
        v-for="(ing, ind) in ingArray"
        :key="ind"
      >
        <div v-if="!isLoading">
          <h2 class="ingredient-name">{{ ing.name }}</h2>
          <p class="ingredient-description">
            {{ ing.details }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      ingArray: [],
    };
  },
  created() {
    this.isLoading = true;
    fetch(
      "https://vue-kitchen-recipe-project-default-rtdb.firebaseio.com/ingredient.json"
    )
      .then((abc) => {
        if (abc.ok) return abc.json();
      })
      .then((data) => {
        this.isLoading = false;
        const tempArr = [];
        for (const id in data) {
          tempArr.push({
            name: data[id].name,
            details: data[id].details,
          });
        }
        this.ingArray = tempArr;
      });
  },
};
</script>

<style scoped>
.parentDiv {
  height: 100%;
  background-color: #f9f7f3;
  color: #333;
  padding-top: 20px;
}
.firstChild {
  margin-left: 20%;
  max-width: 60%;
}
@media (max-width: 750px) {
  .firstChild {
    margin-left: 10%;
    max-width: 80%;
  }
}
h1 {
  text-align: center;
  color: #555;
  margin-bottom: 40px;
}

.ingredient-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
  /* border-left: 4px solid #2980b9; */
  border-left: 4px solid #2ecc71;
}

.ingredient-name {
  /* color: #000; */
  color: #2980b9;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 22px;
}

.ingredient-description {
  color: #555;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0;
}

/* Example of how to add an image if needed later */
.ingredient-image {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin-top: 10px;
}
</style>
