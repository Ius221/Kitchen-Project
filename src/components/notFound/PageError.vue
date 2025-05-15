<template>
  <div class="container">
    <div class="ghost">
      <div class="mouth"></div>
      <div class="wave">
        <div class="w1"></div>
        <div class="w2"></div>
        <div class="w3"></div>
        <div class="w4"></div>
      </div>
    </div>
    <h1 class="error-code">404</h1>
    <h2 class="error-text">Page Not Found</h2>
    <p class="error-description">
      Oops! The page you're looking for seems to have vanished into thin air. It
      might have been moved, deleted, or perhaps it never existed in the first
      place.
    </p>
    <a href="/" class="home-button">Back to Home</a>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  position: relative;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: #dee2e6;
  position: relative;
  margin-bottom: 1rem;
  animation: pulse 4s infinite;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.error-text {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #495057;
}

.error-description {
  color: #6c757d;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.home-button {
  background-color: #2980b9;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 6px rgba(67, 97, 238, 0.2);
}

.home-button:hover {
  background-color: #4361ee;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(67, 97, 238, 0.3);
}

.ghost {
  position: relative;
  width: 100px;
  height: 120px;
  background-color: #2ecc71;
  border-radius: 50% 50% 0 0;
  margin: 0 auto 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: float 4s infinite;
}

.ghost::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #343a40;
  border-radius: 50%;
  top: 30px;
  right: 25px;
}

.ghost::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #343a40;
  border-radius: 50%;
  top: 30px;
  left: 25px;
}

.ghost-tail {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 20px;
}

.ghost-tail::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #2ecc71;
  border-radius: 50%;
  bottom: 0;
  left: 0;
}

.ghost-tail::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #2ecc71;
  border-radius: 50%;
  bottom: 0;
  left: 25px;
}

.ghost-tail span {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #2ecc71;
  border-radius: 50%;
  bottom: 0;
  left: 50px;
}

.ghost-tail span::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #f1f1f1;
  border-radius: 50%;
  bottom: 0;
  left: 25px;
}

.mouth {
  position: absolute;
  width: 30px;
  height: 10px;
  background-color: #343a40;
  border-radius: 0 0 15px 15px;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }

  .error-text {
    font-size: 1.5rem;
  }
}
</style>
