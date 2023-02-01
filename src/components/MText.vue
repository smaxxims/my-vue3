<template>
  <div class="div-out">
    <div 
      class="div-in"
      ref="divIn"
    >
      <input 
        type="text"
        class="m-text"
        :placeholder="placeholder" 
        @focus="input_focus_in()"
        @focusout="input_focus_out()"
      >
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: String
    },
    methods: {
      input_focus_in() {
        this.$refs.divIn.style.boxShadow = '0px 3px 5px 2px #50d5ed'
      },
      input_focus_out() {
        this.$refs.divIn.style.boxShadow = '0px 3px 5px 2px #c4c4c4'
      }
    }
  }
</script>

<style scoped>
  .div-out {
    margin: 1rem;
  }
  .div-in {
    border-radius: 1rem;
    box-shadow: 0px 3px 5px 2px #c4c4c4;
    padding-left: 5px;
  }
  input {
    background-color: transparent;
    color: var(--text-color);
    width: 100%;
    outline: none;
    border: none;
    font-family: var(--main-font-family);
    caret-color: var(--main-color);
    font-size: 1.5rem;
    height: 35px;
  }
  input::placeholder {
    color: var(--main-color);
    font-family: var(--main-font-family);
  }
</style>