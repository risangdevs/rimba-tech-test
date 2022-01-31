<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link v-if="!this.$store.state.access_token" to="/login"
        >Login</router-link
      >
      <router-link
        v-if="this.$store.state.access_token"
        to="/login"
        @click.native="logout"
      >
        Logout</router-link
      >
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push("/login");
      window.location.reload(true)
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff4141;
}
</style>
