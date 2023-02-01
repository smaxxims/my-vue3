<template>
  <router-view/>
</template>

<script>
  export default {
    created() {
      console.log('created');
      window.scrollTo(0,1);
    },
  }
</script>

<style lang="scss">
  @import './assets/style.css';
  html {
    overflow: hidden;
    width: 100%;
  }
  body {
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
