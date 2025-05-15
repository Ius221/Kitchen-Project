<template>
  <div>
    <h1>Home Kitchen Recipe</h1>
    <select-things />
    <router-view />
  </div>
</template>

<script>
import SelectThings from "./nav/SelectThings.vue";
export default {
  components: { SelectThings },
};
</script>

<style>
body {
  background-color: #f9f7f3;
  /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
  font-family: "Dosis", sans-serif;
  letter-spacing: 0.5px;
}
* {
  margin: 0;
  padding: 0;
}
h1 {
  font-family: "koho", serif;
}
</style>

<style scoped>
h1 {
  /* font-family: ; */
  font-weight: bold;
  background-color: #2980b9;
  display: flex;
  justify-content: center;
  color: whitesmoke;
  font-size: 48px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
