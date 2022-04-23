<template>
  <section class="character">
    <h1>char</h1>
    <button @click="getCharacters">fetch staff</button>
    <ul>
        <li v-for="char in characters" :key="char.name">
            {{char.name}}
        </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CharactersView",
  computed:{
      characters(){
          return this.$store.state.characters
      },
      currentPage(){
          return this.$store.state.characters
      },
      maxPages(){
          return this.$store.state.characters
      },
  },
  methods: {
    async getCharacters() {
       await this.$store.dispatch('fetchCharacters')
    },
  },
};
</script>

<style></style>
