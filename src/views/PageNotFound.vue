<template>
  <h1>Seite wurde nicht gefunden.</h1>
  <MButton
    text="Zur Startseite"
    @click="go_to_start_page"
  ></MButton>
</template>

<script>
   import MButton from "@/components/MButton.vue"

   export default {
    components: {
      MButton
    },
    methods: {
      go_to_start_page() {
        this.$router.push('/home')
      }
    }
  }
</script>