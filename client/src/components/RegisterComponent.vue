<template>
  <!-- Login -->
  <div class="container vh-100">
    <div class="grid grid-cols-10 h-screen place-items-center">
      <div
        class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8 place-items-center"
      >
        <h2
          class="text-4xl tracking-widest text-white text-opacity-70 text-center uppercase mb-14"
          style="margin-top: 40px"
        ></h2>
        <div class="grid grid-cols-10">
          <div class="col-start-2 col-span-8">
            <h2 class="text-dark text-opacity-80 text-2xl text-center mb-7">
              Register Now
            </h2>
            <div class="card px-1 py-5 rounded-md">
              <form class="mt-6 mb-6 space-y-6">
                <div class="mb-5 col-12">
                  <label
                    for="email-address"
                    class="text-dark block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    >Email address</label
                  >
                  <input
                    v-model="email"
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="Email address"
                  />
                </div>
                <div class="mb-5 col-12">
                  <label
                    for="password"
                    class="text-dark block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    >Password</label
                  >
                  <input
                    v-model="password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-5 col-12">
                  <label
                    for="Nama"
                    class="text-dark block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    >Nama</label
                  >
                  <input
                    v-model="nama"
                    type="text"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="nama"
                  />
                </div>
                <div class="mb-5 col-12">
                  <label
                    for="contact"
                    class="text-dark block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    >Contact</label
                  >
                  <input
                    v-model="contact"
                    type="tel"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="contact"
                  />
                </div>
                <div class="mb-5 col-12">
                  <label
                    for="alamat"
                    class="text-dark block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    >Alamat</label
                  >
                  <input
                    v-model="alamat"
                    type="text"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="alamat"
                  />
                </div>
                <div class="mb-5 col-12">
                  <label
                    for="ktp"
                    class="text-dark block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    >KTP</label
                  >
                  <input
                    v-model="ktp"
                    type="text"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="Link Gambar KTP"
                  />
                </div>
                <div>
                  <button
                    @click.prevent="register"
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-sm text-purple-900 bg-white bg-opacity-90 hover:bg-white hover:bg-opacity-80 focus:outline-none focus:ring focus:border-purple-500 focus:ring-purple-500 text-lg tracking-wider flex font-bold"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap-vue";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: "",
      password: "",
      nama: "",
      contact: "",
      alamat: "",
      ktp: "",
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("aRegister", {
          email: this.email,
          password: this.password,
          nama: this.nama,
          contact: this.contact,
          alamat: this.contact,
          ktp: this.ktp,
        })
        .then((res) => {
          Swal.fire({
            title: "Success",
            text: `${res}`,
            icon: "info",
            confirmButtonText: "Okay..",
          });
          // this.$router.push("/login");
          // this.$emit('toLogin')
        })
        .catch((err) => {
          Swal.fire({
            title: "Error",
            text: `${err}`,
            icon: "error",
            confirmButtonText: "Oh no..",
          });
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
