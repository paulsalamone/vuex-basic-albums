<template>
  <div>
    <h2>album list:</h2>
    <AlbumFilter />
    <div class="list-grid" v-if="all === 'all'">
      <AlbumCard
        v-for="(album, index) in albumsAll"
        :key="index"
        :album="album"
        :toggleFavorite="toggleFavorite"
        :deleteAlbum="deleteAlbum"
      />
    </div>
    <div class="list-grid" v-else>
      <AlbumCard
        v-for="(album, index) in albumsLiked"
        :key="index"
        :album="album"
        :toggleFavorite="toggleFavorite"
        :deleteAlbum="deleteAlbum"
      />
    </div>
  </div>
</template>

<script>
import AlbumCard from "./AlbumCard.vue";
import AlbumFilter from "./AlbumFilter.vue";
export default {
  data: function () {
    return {};
  },
  components: {
    AlbumCard,
    AlbumFilter,
  },
  computed: {
    all() {
      return this.$store.state.toggleView;
    },

    albumsAll() {
      return this.$store.state.albums;
    },
    albumsLiked() {
      return this.$store.getters.albumsLiked;
    },
  },
  methods: {
    toggleFavorite(artistName) {
      this.$store.commit("toggleFavorite", artistName);
    },
    deleteAlbum(album) {
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
