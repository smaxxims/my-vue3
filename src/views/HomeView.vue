<template>
  <Header @logout="logout"/>
  <Content/>
  <Footer/>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Content from '@/components/Content.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Header,
      Content,
      Footer
    },
    beforeCreate() {
      let data = sessionStorage.getItem('login')
      if(data !== 'true')
      this.$router.push('/')
    },
    methods: {
    logout() {
      console.log('logout')
      sessionStorage.removeItem('login')
      this.$router.push('/')
    }
  }
  }
</script>
