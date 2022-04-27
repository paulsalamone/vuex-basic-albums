<template>
  <div>
    <img :src="require(`../assets/${album.art}.jpeg`)" :alt="album.title" />
    <h3>{{ album.title }}</h3>
    <h4>{{ album.artist }}</h4>
    <button
      v-if="!album.favorite"
      class="like"
      key=""
      @click="toggleFavorite(album.artist)"
    >
      🤍
    </button>
    <button
      v-else
      key=""
      class="green like liked-active"
      @click="toggleFavorite(album.artist)"
    >
      💚
    </button>
    <button class="delete" @click="deleteAlbum(album)">🗑️</button>
  </div>
</template>

<script>
export default {
  props: ["album", "toggleFavorite", "deleteAlbum"],
  computed: {},
};
</script>

<style scoped>
.green {
  background-color: lightgreen;
}

.like:active {
  background-color: lightgreen;
}
.delete:hover {
  background-color: #ddd;
}

.delete:active {
  background-color: #ddaaaa;
}

.liked-active:hover {
  background-color: lightgreen;
}

h3 {
  font-size: 2rem;
  margin: 0px;
}

h4 {
  font-size: 1.2rem;
  margin: 0px;
}

button {
  border-radius: 50%;
  font-size: 0.8rem;
  padding: 10px;
  border: 0px;
  margin-bottom: 25px;
}

img {
  height: 200px;
  width: 200px;
  margin: 10px;
  border: 1px solid #eee;
}
</style>
