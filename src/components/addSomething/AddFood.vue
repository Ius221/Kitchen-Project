<template>
  <div class="parent-div">
    <header>
      <h1>Add a New Recipe</h1>
      <p class="form-subtitle">
        Share your delicious creations with our community
      </p>
    </header>

    <div class="form-container">
      <form @submit.prevent="formSubmit">
        <!-- Name field -->
        <div class="form-group">
          <label for="foodName">Food Name</label>
          <input
            required
            type="text"
            id="foodName"
            name="foodName"
            placeholder="E.g., Chocolate Chip Cookies"
            v-model="foodName"
          />
        </div>

        <!-- Item List -->
        <div class="form-group">
          <label>Ingredients You have:</label>
          <!-- Waiting message -->
          <p v-if="isLoading">Loading may take some time...</p>
          <div class="check-outer" v-if="!isLoading">
            <div class="check-inner" v-for="(ing, ind) in checkList" :key="ind">
              <input
                type="checkbox"
                :id="ind"
                :value="ing.name"
                v-model="ingredient"
              />
              <label :for="ind">{{ ing.name }}</label>
            </div>
          </div>
        </div>

        <!-- Time taken to make it -->
        <div class="form-group">
          <label for="timeTaken" class="time">Time taken </label>
          <input
            required
            type="number"
            name="timeTaken"
            id="timeTaken"
            placeholder="In Minutes"
            v-model="processTime"
          />
        </div>

        <!-- cooking process -->
        <div class="form-group">
          <label for="process">Cooking Process</label>
          <textarea
            required
            id="process"
            name="process"
            placeholder="Describe the cooking process step by step..."
            v-model="makingProcess"
          ></textarea>
        </div>

        <!-- food Details -->
        <div class="form-group">
          <label for="process">Tell something about it</label>
          <textarea
            id="process"
            required
            name="process"
            placeholder="Describe Your Delicious Food..."
            v-model="description"
            class="food-details"
          ></textarea>
        </div>

        <!-- Images -->
        <div class="form-group">
          <label for="foodImage">Insert Food Image Address</label>
          <input
            required
            type="text"
            id="foodImage"
            name="foodImage"
            placeholder="https://butfirstchai.com/wp-co..."
            v-model="imageUrl"
          />
        </div>
        <center>
          <button type="submit">Add Recipe</button>
        </center>
      </form>
    </div>

    <div class="nav-link">
      <router-link to="/addIngredient"> Add New Ingredient Insted</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
      isLoading: false,

      //user form need
      userRecipe: {},
      foodName: "",
      ingredient: [],
      imageUrl: "",
      processTime: "",
      makingProcess: "",
      description: "",

      // For changing the ingredients
      page: "chnageText",
    };
  },

  created() {
    // console.log("You call me ?? ");
    this.isLoading = true;
    fetch(
      "https://vue-kitchen-recipe-project-default-rtdb.firebaseio.com/ingredient.json"
    )
      .then((abc) => {
        if (abc.ok) return abc.json();
      })
      .then((data) => {
        this.isLoading = false;
        let tempData = [];
        for (const id in data) {
          tempData.push({
            name: data[id].name,
          });
        }
        this.checkList = tempData;
        // console.log(tempData);
      });
  },
  methods: {
    formSubmit() {
      //  making temp object to assign the db for clean code
      const tempObj = {
        name: this.foodName,
        ingredient: this.ingredient,
        hour: Math.floor(this.processTime / 60),
        min: this.processTime % 60,
        process: this.makingProcess,
        details: this.description,
        imageURL: this.imageUrl,
      };

      // Insert data in db here
      fetch(
        "https://vue-kitchen-recipe-project-default-rtdb.firebaseio.com/recipe.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(tempObj),
        }
      );

      //clear all the field
      this.name = "";
      this.ingredient = [];
      this.processTime = "";
      this.makingProcess = "";
      this.description = "";
      this.imageUrl = "";
    },
  },
};
// console.log(this.ingList);
</script>

<style scoped>
.check-outer {
  display: grid;
  grid-template-columns: repeat(4, 20%);
  gap: 5%;
  margin-bottom: 50px;
}

.time span {
  font-size: 14px;
  color: #aaa;
}
input[type="checkbox"] {
  margin-right: 15px;
  padding-bottom: 2px;
}

.check-inner {
  display: flex;
  align-items: center;
  margin: 5px;
  /* background-color: tomato; */
  /* border: 2px solid rgb(124, 124, 124); */
  border-radius: 5px;
}
.parent-div {
  margin-left: 20%;
  max-width: 60%;
}
@media (max-width: 1000px) {
  .check-outer {
    grid-template-columns: repeat(3, 25%);
    gap: 8.33%;
    margin-bottom: 50px;
  }
  .parent-div {
    margin-left: 10%;
    max-width: 80%;
  }
}
@media (max-width: 700px) {
  .check-outer {
    grid-template-columns: repeat(2, 40%);
    gap: 10%;
    margin-bottom: 65px;
  }
}
header {
  margin-top: 40px;
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  /* color: #ff6b6b; */
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  display: inline-block;
}
/* #27AE60 */
/* #4ECDC4 */
h1::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: #27ae60;
  border-radius: 2px;
}

.form-subtitle {
  color: #666;
  font-size: 1.1rem;
  font-weight: 400;
}

.form-container {
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.form-container:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2d3436;
  font-size: 20px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  font-family: inherit;
  /* margin-right: 100px; */
}

input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  outline: none;
  border-color: #4ecdc4;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.2);
}

textarea {
  min-height: 150px;
  resize: vertical;
}
.food-details {
  min-height: 100px;
  resize: vertical;
}

input[type="file"] {
  width: 100%;
  padding: 10px 0;
  margin-top: 5px;
}

.file-input-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

.file-input-button {
  display: inline-block;
  padding: 12px 20px;
  background-color: #e9ecef;
  color: #495057;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  font-weight: 500;
  border: 2px solid #e0e0e0;
}

.file-input-button:hover {
  background-color: #dee2e6;
}

input[type="file"] {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

#file-name-display {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #666;
}

button {
  background-color: #27ae60;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: block;
  width: 40%;
  box-shadow: 0 4px 6px rgba(255, 107, 107, 0.2);
}

button:hover {
  background-color: #208b4d;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(255, 107, 107, 0.25);
}

button:active {
  transform: translateY(1px);
}

.nav-link {
  display: block;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.nav-link a {
  color: #27ae60;
  border: 1px solid red;
  /* background-color: red; */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
}

.nav-link a:hover {
  color: #ff6b6b;
  background-color: rgba(78, 205, 196, 0.1);
}

@media (max-width: 768px) {
  .form-container {
    padding: 25px;
  }

  h1 {
    font-size: 2rem;
  }
}

/* Placeholder styling */
::placeholder {
  color: #aaa;
  opacity: 1;
}
</style>
