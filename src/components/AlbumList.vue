<template>
  <div>
    <h2>album list:</h2>
    <AlbumFilter />
    <div class="list-grid">
      <AlbumCard
        v-for="(album, index) in albums"
        :key="index"
        :album="album"
        :toggleFavorite="toggleFavorite"
        :deleteAlbum="deleteAlbum"
      />
      <!-- <div v-for="(album, index) in albums" :key="index">
        <img :src="require(`../assets/${album.art}.jpeg`)" :alt="album.title" />
        <h3>{{ album.title }}</h3>
        <h4>{{ album.artist }}</h4>
        <p>Favorite: {{ album.favorite }}</p>
        <button @click="toggleFavorite">Favorite</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import AlbumCard from "./AlbumCard.vue";
import AlbumFilter from "./AlbumFilter.vue";
export default {
  data: function () {
    return {
      //   album: {},
    };
  },
  components: {
    AlbumCard,
    AlbumFilter,
  },
  computed: {
    albums() {
      return this.$store.state.albums;
    },
  },
  methods: {
    toggleFavorite(artistName) {
      console.log("toggle method");
      //   console.log(this.album);
      console.log("artName=" + artistName);
      this.$store.commit("toggleFavorite", artistName);
    },
    deleteAlbum(album) {
      console.log("delete album method");
      this.$store.commit("deleteAlbum", album);
    },
  },
};
</script>

<style scoped>
.list-grid {
  border: 1px solid #bbb;
  margin: 20px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

img {
  width: 170px;
  height: 170px;
}
</style>
