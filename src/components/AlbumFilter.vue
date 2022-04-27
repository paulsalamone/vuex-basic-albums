<template>
  <section>
    Show:
    <div v-if="show === 'all'">
      <button class="active" @click="toggleAll">all</button>
      <button @click="toggleLiked">🤍 liked</button>
    </div>
    <div v-else>
      <button @click="toggleAll">all</button>
      <button class="active green" @click="toggleLiked">💚 liked</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      //   show: "all",
    };
  },
  computed: {
    show() {
      return this.$store.state.toggleView;
    },
  },
  methods: {
    toggleAll() {
      //   this.show = "all";
      this.$store.commit("toggleAll");
    },
    toggleLiked() {
      //   this.show = "like";
      this.$store.commit("toggleLiked");
    },
  },
};
</script>

<style>
.active {
  border: 3px solid black;
}

.green {
  background-color: lightgreen;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
