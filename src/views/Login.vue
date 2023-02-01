<template>
  
  <div 
    class="flex flex-col justify-center gradient-back" 
    style="height: 100vh;"
  >
    <div class="heading flex justify-center mb-12">Login</div>
    <MText placeholder="Name"></MText>
    <MText placeholder="Password"></MText>
  </div>
</template>

<script>
  import MText from "@/components/MText.vue";

  export default {
    components: {
      MText
    }
  }
</script>

<style scoped>
  .heading {
    color: white;
    font-size: 3rem;
    font-family: monospace;
  }
</style>