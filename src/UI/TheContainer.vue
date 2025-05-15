<template>
  <div class="mainDiv">
    <div class="container">
      <img
        src="https://plus.unsplash.com/premium_photo-1666174323324-24ca53b2e268?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNhbHR8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <div>
        <h3>
          <slot name="ingName" />
        </h3>

        <p>
          <slot name="para" />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  color: white;
  background: linear-gradient(
    to right bottom,
    rgb(20, 20, 71) 20%,
    rgb(28, 93, 131)
  );
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin-left: 20%;
  max-width: 60%;

  display: flex;
}
h3 {
  margin: 0;
  height: auto;
  margin-top: 10px;
  margin-left: 20px;
  font-size: 26px;
  font-weight: 500;
}
p {
  font-size: 18px;
  margin-top: 8px;
  margin-left: 20px;
  font-weight: 300;
  /* display: inline; */
}
img {
  padding: 0;
  margin: 0;
  height: 100px;
  width: 100px;
}
.mainDiv {
  margin-bottom: 20px;
}
</style>
