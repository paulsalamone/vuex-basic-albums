<template>
  <div>
    <h2>create album:</h2>
    <form action="submit" @submit.prevent="onSubmit">
      <input type="text" placeholder="artist" v-model="album.artist" />
      <input type="text" placeholder="title" v-model="album.title" />
      <input type="text" placeholder="art" v-model="album.art" />
      <button type="submit">submit</button>
    </form>
    <!-- Local: {{ album }} -->
  </div>
</template>

<script>
// import Vuex from "vuex";
export default {
  data() {
    return {
      album: { artist: "", title: "", art: "" },
    };
  },
  //   computed: Vuex.mapState(["albums"]),

  methods: {
    onSubmit() {
      //   e.preventDefault();
      //   this.createAlbum(this.album);
      this.$store.commit("createAlbum", this.album);

      this.album = { artist: "", title: "", art: "" };
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
input,
button {
  margin: 3px;
  padding: 6px;
  font-size: 1.3rem;
}
</style>
