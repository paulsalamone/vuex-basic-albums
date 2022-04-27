import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albums: [{ artist: "NIN", title: "fixed", art: "nin1" }],
    art: [
      "gbv1",
      "hp1",
      "merz1",
      "nin1",
      "pave1",
      "pe1",
      "phar1",
      "rae1",
      "sy1",
      "yo1",
    ],
  },
  getters: {},
  mutations: {
    createAlbum(state, album) {
      state.albums.push(album);
    },
  },
  actions: {},
  modules: {},
});
