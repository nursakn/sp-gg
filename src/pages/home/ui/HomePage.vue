<template>
  <main class="wrapper">
    <h2>Welcome to the Currency Converter App</h2>
    <p>This application allows you to easily convert between different currencies.</p>
    <p>Go to the Convert page to use the currency converter.</p>
  </main>
</template>

<style scoped>
.wrapper {
  min-height: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 1rem;
  }

  h2, p {
    text-align: center;
  }
}
</style>
