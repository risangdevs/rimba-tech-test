import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: localStorage.access_token,
    baseUrl: "http://localhost:3012",
  },
  mutations: {},
  actions: {
    aRegister({ state }, { email, password, nama, alamat, contact, ktp }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "post",
          url: `${state.baseUrl}/customers/register`,
          data: { email, password, nama, alamat, contact, ktp },
        };
        axios(config)
          .then((res) => {
            resolve(res.data.message);
          })
          .catch((err) => {
            reject(err.response.data.message);
          });
      });
    },
    aLogin({ state }, { email, password }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "post",
          url: `${state.baseUrl}/customers/login`,
          data: { email, password },
        };
        axios(config)
          .then((res) => {
            localStorage.setItem("access_token", res.data.access_token);
            // commit("mLogin");
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aFetch({ state }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "get",
          url: `${state.baseUrl}/items`,
        };
        axios(config)
          .then((res) => {
            // console.log(res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aFetchLists({ state }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "get",
          url: `${state.baseUrl}/lists`,
          headers: { access_token: localStorage.access_token },
        };
        axios(config)
          .then((res) => {
            // console.log(res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aFetchSales({ state }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "get",
          url: `${state.baseUrl}/sales`,
          headers: { access_token: localStorage.access_token },
        };
        axios(config)
          .then((res) => {
            // console.log(res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aAdd({ state }, { id, qty }) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "post",
          url: `${state.baseUrl}/lists`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: { ItemId: id, qty: +qty },
        };
        axios(config)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    aCheckOut({ state }, id) {
      return new Promise((resolve, reject) => {
        const config = {
          method: "post",
          url: `${state.baseUrl}/sales`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: { ListId: id },
        };
        axios(config)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
