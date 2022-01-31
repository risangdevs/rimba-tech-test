<template>
  <div class="home">
    <LoginComponent v-if="page === 'login'" />
    <RegisterComponent v-if="page === 'register'" />
    <button v-if="page === 'login'" @click.prevent="changePage('login')">
      Register
    </button>
    <button v-if="page === 'register'" @click.prevent="changePage('register')">
      Login
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "@/components/LoginComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";

export default {
  name: "Login",
  components: {
    LoginComponent,
    RegisterComponent,
  },
  data() {
    return {
      page: "login",
    };
  },
  methods: {
    changePage(currentPage) {
      if (currentPage === "login") {
        this.page = "register";
      } else {
        this.page = "login";
      }
    },
  },
};
</script>
