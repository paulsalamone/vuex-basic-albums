<template>
  <div>
    <h2>art list:</h2>
    <ul>
      <li v-for="(art, index) in artWorks" :key="index">
        {{ art }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    artWorks() {
      return this.$store.state.art;
    },
  },
};
</script>

<style scoped>
div {
  background-color: #eee;
  padding: 10px;
  margin: 10px;
  text-align: left;
}
h2,
ul {
  padding: 0px;
  margin: 0px;
}
li {
  list-style-type: none;
}
</style>
