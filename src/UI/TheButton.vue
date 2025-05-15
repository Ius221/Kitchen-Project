<template>
  <button class="btn-secondary">
    <slot />
  </button>
</template>

<style scoped>
.btn-secondary,
a {
  border: none;
  padding: 5px;
  /* width: 150px; */
  border-radius: 5px;
  font-size: 20px;
  background-color: #2ecc71;
  color: white;
  box-shadow: 0 2px 5px rgba(46, 204, 113, 0.3);
}

.btn-secondary:hover,
a:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(46, 204, 113, 0.5);
}

.btn-secondary:active,
a {
  transform: translateY(0);
}
/* display: flex; */
</style>
