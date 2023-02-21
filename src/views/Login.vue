<template>
  <div 
    class="" 
  >
    <div class="heading flex justify-center mt-10 mb-16">Login</div>
    <MText 
      input_type="text"
      placeholder="Name"
      ref="name"
    ></MText>

    <MText 
      input_type="password"
      placeholder="Passwort"
      ref="pass"
    ></MText>
    <div class="flex justify-center mt-8">
      <MButton 
        @click="submit_login"
        text="Login"
      ></MButton>
    </div>

  </div>
</template>

<script>
  import MText from "@/components/MText.vue"
  import MButton from "@/components/MButton.vue"

  export default {
    data() {
      return {
        name: '',
        pass: ''
      };
    },
    components: {
      MText,
      MButton
    },
    methods: {
      submit_login() {
        console.log('submit_login')
        if(this.$refs.name.input !== '' 
        && this.$refs.pass.input !== '') {
          console.log('name', this.$refs.name.input)
          console.log('pass', this.$refs.pass.input)

          let is_user = false
          this.$store.state.user.forEach(user => {
            console.log('user', user)
            console.log('user', user.name)
            if(this.$refs.name.input === user.name
            && this.$refs.pass.input === user.pass) {
              is_user = true
            }
          })

          console.log('let user',is_user)

          if(is_user) {
            sessionStorage.setItem("login", "true")
            this.$router.push('/home')
            //window.open('/home')
          } else {
            alert('Login fehlgeschlagen.')
            return
          }
        }
      }
    }
  }
</script>

<style scoped>
  .heading {
    color: var(--main-color);
    font-size: 3rem;
    text-transform: uppercase;
    font-family: var(--main-font-family);
    font-weight: 700;
    color: #f5f5f5;
    text-shadow: 
      1px 1px 1px #919191,
      1px 2px 1px #919191,
      1px 3px 1px #919191,
      1px 4px 1px #919191,
      1px 5px 1px #919191,
      1px 6px 1px #919191,
      1px 7px 1px #919191,
      1px 8px 1px #919191,
      1px 9px 1px #919191,
      1px 10px 1px #919191,
      1px 18px 6px rgba(16,16,16,0.4),
      1px 22px 10px rgba(16,16,16,0.2),
      1px 25px 35px rgba(16,16,16,0.2),
      1px 30px 60px rgba(16,16,16,0);
  }
</style>