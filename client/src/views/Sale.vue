<template>
  <div class="about">
    <h1>Sales History</h1>
    <div class="container vh-90">
      <div class="d-flex justify-content-center mx-1 my-5 flex-wrap">
        <div
          class="card"
          style="width: 18rem; margin: 10px"
          v-for="sale in sales"
          :key="sale.id"
          :sale="sale"
        >
          <!-- <img
            class="card-img-top"
            :src="cart.Item.barang"
            alt="Card image cap"
          /> -->
          <!-- <p>{{sale.code_transaksi}}</p> -->
          <p>{{ sale.tanggal_transaksi }}</p>
          <div class="card-body">
            <strong
              ><h5 class="card-title">{{ sale.code_transaksi }}</h5></strong
            >
            <p class="card-text">Total Harga : {{ sale.total_harga }}</p>
            <p class="card-text">Total Bayar : {{ sale.total_bayar }}</p>

            <!-- <a href="#" class="btn btn-primary mb-2" @click="addToCart(item.id)"
              >Checkout</a
            > -->

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
  name: "Sale",
  data() {
    return {
      sales: [],
    };
  },
  methods: {
    fetchSales() {
      this.$store
        .dispatch("aFetchSales")
        .then((res) => {
          // console.log(res);
          this.sales = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchSales();
  },
};
</script>
