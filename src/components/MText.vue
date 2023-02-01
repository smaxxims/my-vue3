<template>
  <div class="div-out">
    <div class="div-in">
      <input 
        :placeholder="placeholder" 
        type="text"
        class="m-text"
      >
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: String
    }
  }
</script>

<style scoped>
  .div-out {
    margin: 1rem;
  }
  .div-in {
    border-bottom: 1px solid white;
  }
  input {
    background-color: transparent;
    color: white;
    width: 100%;
    outline: none;
    border: none;
    font-family: monospace;
    caret-color: white;
    caret-shape: block;
    font-size: 1rem;
  }

  input::placeholder {
    color: rgb(95, 95, 95);
    font-family: monospace;
  }
</style>