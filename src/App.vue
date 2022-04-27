<template>
  <div id="app">
    <h1>basic albums</h1>
    <main>
      <!-- cover art list -->
      <ArtList />
      <!-- add album -->
      <CreateAlbum />

      <!-- optional: filter to show liked only -->
      <!-- list of albums with like and delete -->
      <AlbumList />
    </main>
  </div>
</template>

<script>
import AlbumList from "./components/AlbumList.vue";
import ArtList from "./components/ArtList.vue";
import CreateAlbum from "./components/CreateAlbum.vue";

export default {
  components: {
    ArtList,
    AlbumList,
    CreateAlbum,
  },
};
</script>
<style>
main {
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
