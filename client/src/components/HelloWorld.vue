<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container vh-90">
      <div class="d-flex justify-content-center mx-1 my-5 flex-wrap">
        <div
          class="card"
          style="width: 18rem; margin: 10px"
          v-for="item in items"
          :key="item.id"
          :item="item"
        >
          <img class="card-img-top" :src="item.barang" alt="Card image cap" />
          <div class="card-body">
            <strong
              ><h5 class="card-title">{{ item.nama_item }}</h5></strong
            >
            <p class="card-text">
              Harga : {{ item.harga_satuan }} per {{ item.unit }}
            </p>
            <p class="card-text">Stok : {{ item.stok }} {{ item.unit }}</p>
            <p>
              Qty:
              <input min="0" v-model="qty" style="width: 50px" type="number" />
            </p>
            <a href="#" class="btn btn-primary mb-2" @click="addToCart(item.id)"
              >Add to Cart</a
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
import "bootstrap-vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      items: [],
      qty: 0,
    };
  },
  methods: {
    fetchItems() {
      this.$store
        .dispatch("aFetch")
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCart(id) {
      const qty=this.qty
      this.$store
        .dispatch("aAdd", {id, qty})
        .then(() => {
          this.$router.push("/cart");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
</style>
