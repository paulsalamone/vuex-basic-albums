import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggleView: "all",
    albums: [
      { artist: "NIN", title: "fixed", art: "nin1", favorite: false },
      {
        artist: "Guided by Voices",
        title: "Bee Thousand",
        art: "gbv1",
        favorite: true,
      },

      {
        artist: "Merzbow",
        title: "Scary Lines",
        art: "merz1",
        favorite: false,
      },
      {
        artist: "Raekwon",
        title: "Cuban Links",
        art: "rae1",
        favorite: false,
      },
    ],
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
  getters: {
    albumsLiked(state) {
      return state.albums.filter((e) => e.favorite);
    },
  },
  mutations: {
    createAlbum(state, album) {
      state.albums.push(album);
    },
    toggleFavorite(state, artistName) {
      state.albums
        .filter((e) => e.artist === `${artistName}`)
        .map((e) => (e.favorite = !e.favorite));
    },
    deleteAlbum(state, album) {
      let extract = state.albums.filter((e) => e.artist !== `${album.artist}`);
      state.albums = extract;
    },
    toggleAll(state) {
      state.toggleView = "all";
    },
    toggleLiked(state) {
      state.toggleView = "liked";
    },
  },
  actions: {},
  modules: {},
});
