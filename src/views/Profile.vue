<template>
  <div>
    <router-link :to="`/profile/${$route.params.id}/todo`">Zu den Todos</router-link>
    <router-link :to="`/profile/${$route.params.id}/post`">Zu den Posts</router-link>
    <h1>Profile {{ id }}</h1>
    <h6>{{ userData }}</h6>
    <router-view :user="userData"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      userData: {},
      name: '',
    };
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
    .then(response => response.json())
    .then(response => this.userData = response)
  },
  methods: {
    
  }
};
</script>

<style>
.router-link-active {
  color: #e74c3c;
}
</style>