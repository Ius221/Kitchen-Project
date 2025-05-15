<template>
  <div class="parent-div">
    <h1 class="page-title">My Recipe Collection</h1>

    <div class="recipe-container">
      <p v-if="isLoading" class="loading">Loading...</p>

      <!-- Recipe Card  -->

      <template v-for="(recipe, ind) in recipeArr" :key="ind">
        <div class="recipe-card" v-if="!isLoading">
          <img
            :src="recipe.imageUrl"
            alt="Spaghetti Carbonara"
            class="recipe-image"
          />
          <div class="recipe-content">
            <h2 class="recipe-name">{{ recipe.name }}</h2>
            <span class="recipe-time">
              ⏱️ {{ hourComputed(recipe) }} {{ recipe.min }} minutes
            </span>
            <p class="recipe-description">
              {{ recipe.details }}
            </p>

            <h3 class="section-title">Ingredients</h3>
            <ul
              class="ingredients-list"
              v-for="(ingd, index) in recipe.ingredients"
              :key="index"
            >
              <li>{{ ingd }}</li>
            </ul>

            <h3 class="section-title">Instructions</h3>
            <p class="instructions">
              {{ recipe.makingProcess }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      recipeArr: [],
    };
  },

  computed: {
    hourComputed() {
      return (recipe) => {
        if (recipe.hour && recipe.hour > 0) {
          return `${recipe.hour} hour${recipe.hour > 1 ? "s" : ""}`;
        }
        return "";
      };
    },
  },

  created() {
    this.isLoading = true;
    fetch(
      "https://vue-kitchen-recipe-project-default-rtdb.firebaseio.com/recipe.json"
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
            hour: data[id].hour,
            min: data[id].min,
            ingredients: data[id].ingredient,
            makingProcess: data[id].process,
            processTime: data[id].processTime,
            imageUrl: data[id].imageURL,
          });
          this.recipeArr = tempArr;
        }
      });
  },
};
</script>

<style scoped>
h1 {
}
.loading {
  display: flex;
  justify-content: center;
}
.parent-div {
  /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  margin: 0;
  padding: 20px; */
  margin-left: 20%;
  max-width: 60%;
}
.page-title {
  text-align: center;
  color: #555;
  margin-bottom: 40px;
  padding-top: 20px;
}

.recipe-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.recipe-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.recipe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.recipe-content {
  padding: 20px;
}

.recipe-name {
  font-size: 1.5rem;
  color: #2980b9;
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 2px solid #c0ffda;
  padding-bottom: 10px;
}

.recipe-time {
  display: inline-block;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #777;
  background-color: #c8e5f8;
  padding: 5px 10px;
  border-radius: 20px;
}

.recipe-description {
  /* height: 200px; */
  margin-bottom: 20px;
  color: #555;
  line-height: 1.6;
}

.section-title {
  font-size: 1.1rem;
  color: #2980b9;
  margin-top: 20px;
  margin-bottom: 10px;
}

.ingredients-list {
  padding-left: 20px;
  margin-bottom: 20px;
  columns: 2;
}

.ingredients-list li {
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 0.9rem;
}

.instructions {
  color: #333;
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .recipe-container {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  .ingredients-list {
    columns: 1;
  }
}
/* @media (max-width: 1000px) {
  .parent-div {
    margin-left: 10%;
    max-width: 80%;
  }
} */
</style>
