<template>
  <div 
    class="button"
  >
    {{ text }}
  </div>
</template>

<script>
  export default {
    props: {
      text: String
    }
  }
</script>

<style scoped>
  .button {
    border-radius: 1rem;
    box-shadow: 0px 3px 5px 2px #c4c4c4;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    color: #fff;
    background-color: var(--text-color);
    font-family: var(--main-font-family);
    font-size: 1.5rem;

  }
</style>