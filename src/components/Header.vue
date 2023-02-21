<template>
  <div class="header flex justify-between items-center px-4">
    <div class="text-color-white">
      Logo
    </div>
    <div class="flex items-center">
      <MButton 
        text="Logout"
        @click="$emit('logout')"  
      />
    </div>
  </div>
</template>

<script>
import MButton from '@/components/MButton.vue'
  export default {
    components: {
      MButton
    },
  }
</script>

<style scoped>

</style>
