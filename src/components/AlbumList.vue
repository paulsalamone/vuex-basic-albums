<template>
  <div>
    <h2>album list:</h2>
    <div class="list-grid">
      <div v-for="(album, index) in albums" :key="index">
        <img :src="require(`../assets/${album.art}.jpeg`)" :alt="album.title" />
        <h3>{{ album.title }}</h3>
        <h4>{{ album.artist }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    albums() {
      return this.$store.state.albums;
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
