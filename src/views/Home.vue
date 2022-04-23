<template>
  <div class="home">
    <header>
      <h1>Star Wars Catalog</h1>
    </header>
    <main>
      <section class="character-list" >
        <ul>
          <Loader v-if="loading"/>
          <li v-else v-for="char in characters" :key="char.name"
          @click="setCurrentCharacter(char)"
          >
            {{char.name}}
          </li>
        </ul>
        <span>
          <button @click="previousPage">&lt;</button>
          <p>{{currentPage}} / {{maxPages}}</p>
          <button @click="nextPage">&gt;</button>
        </span>
      </section>
      <section class="character-info" >
        <article class="charracter-ditails" v-if="currentCharacter">
          {{currentCharacter}}
        </article>
        <article class="planet-ditails" v-if="!planetLoading">
          {{currentPlanet}}
        </article>
        <loader v-else />
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Loader from '@/components/Loader.vue'
export default {
  name: "HomeView",
  components: {Loader},
  data(){return{
    loading: true,
    planetLoading: true,
    currentCharacter: null
  }},

  async mounted(){
    await this.$store.dispatch('fetchCharacters')
    this.loading = false
  },
  computed:{
      characters(){
          return this.$store.state.characters
      },
      currentPage(){
          return this.$store.state.currentPage
      },
      maxPages(){
          return this.$store.state.maxPages
      },
      currentPlanet(){
          return this.$store.state.currentPlanet
      },
  },

  methods:{
   async previousPage(){
      this.loading = true
      await this.$store.dispatch('fetchPreviousPage')
      this.loading = false
    },
    async nextPage(){
      this.loading = true
      await this.$store.dispatch('fetchNextPage')
      this.loading = false
    },
    async setCurrentCharacter(char){
      this.currentCharacter = char
      this.planetLoading = true
      await this.$store.dispatch('fetchPlanet', char)
      this.planetLoading = false
    }
  }

};
</script>

// 1 timme 16 minuter
<style>
html,
body {
  margin: 0;
  height: 100%;
}
h1 {
  font-family: "Ropa Sans", sans-serif;
  color: #ffd600;
  font-size: 5rem;
  width: 380px;
  margin: 2rem;
}
header {
  background-image: url("../assets/header2.png");
  background-size: cover;
  height: 30vh;
}
section{
  background-color: #E1DEDE;
}
main{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

}
.home {
  background-color: #535556;
}
span {
  display: flex;
  color: black;
}
</style>
