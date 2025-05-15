<template>
  <div class="parent-div">
    <header>
      <h1>Add a New Ingredient</h1>
      <p class="form-subtitle">
        Help build our ingredient database for better recipes
      </p>
    </header>

    <!-- Name field -->
    <div class="form-container">
      <form id="ingredientForm" @submit.prevent="formSubmmission">
        <div class="form-group">
          <label for="ingredientName">Ingredient Name</label>
          <input
            required
            class="required"
            type="text"
            id="ingredientName"
            name="ingredientName"
            placeholder="E.g., Fresh Basil"
            v-model="name"
          />
        </div>

        <!-- Ingredient Details -->
        <div class="form-group">
          <label for="ingredientDetails">Ingredient Details</label>
          <textarea
            required
            class="required"
            id="ingredientDetails"
            name="ingredientDetails"
            placeholder="Write a brief description about this ingredient, its uses, benefits, taste profile, substitutes, etc..."
            v-model="details"
          ></textarea>
        </div>

        <center>
          <button type="submit">Add Ingredient</button>
        </center>
      </form>
    </div>
    <div class="nav-link">
      <router-link to="addRecipe">Add New Recipe Instead</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      details: "",
    };
  },
  methods: {
    formSubmmission() {
      //ADD DATABASE
      fetch(
        "https://vue-kitchen-recipe-project-default-rtdb.firebaseio.com/ingredient.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            details: this.details,
          }),
        }
      );
      this.name = "";
      this.details = "";
    },
  },
};
</script>

<style scoped>
.parent-div {
  margin-left: 20%;
  max-width: 60%;
}

header {
  margin-top: 40px;
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  /* color: #4ecdc4; */
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

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
/* 27ae60 */
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
  font-size: 1.05rem;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  font-family: inherit;
}

input[type="text"]:focus,
textarea:focus {
  outline: none;
  /* border-color: var(--primary-color); */
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.2);
}

textarea {
  min-height: 150px;
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
  box-shadow: 0 4px 6px rgba(78, 205, 196, 0.2);
}

button:hover {
  background-color: #208b4d;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(78, 205, 196, 0.25);
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

.required:after {
  content: " *";
  color: red;
}

.ingredient-icon {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: var(--primary-color);
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
