<template>
  <div class="about">
    <h1>Cart</h1>
    <div class="container vh-90">
      <div class="d-flex justify-content-center mx-1 my-5 flex-wrap">
        <div
          class="card"
          style="width: 18rem; margin: 10px"
          v-for="cart in carts"
          :key="cart.id"
          :cart="cart"
        >
          <img
            class="card-img-top"
            :src="cart.Item.barang"
            alt="Card image cap"
          />
          <div class="card-body">
            <strong
              ><h5 class="card-title">{{ cart.Item.nama_item }}</h5></strong
            >
            <p class="card-text">Total Harga : {{ cart.totalPrice }}</p>
            <p class="card-text">Quantity : {{ cart.qty }} {{ cart.Item.unit }}</p>
            
            <a href="#" class="btn btn-primary mb-2" @click.prevent="checkOut(cart.id)"
              >Checkout</a
            >

            <!-- <router-link :to="'movies/' + movie.id"
              ><a href="#" class="btn btn-success mb-2" to="path"
                >Find out more</a
              ></router-link
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    fetchLists() {
      this.$store
        .dispatch("aFetchLists")
        .then((res) => {
          // console.log(res);
          this.carts = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkOut(id){
      this.$store
        .dispatch("aCheckOut", id)
        .then((res) => {
          // console.log(res);
          this.carts = res;
          this.$router.push('/sale')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchLists();
  },
};
</script>
