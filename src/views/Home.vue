<template>
  <div class="home">
    <header>
      <h1>Star Wars Catalog</h1>
    </header>
    <main>
      <section class="character-list" >
        <section class="characters">
          <h2>Characters</h2>
        </section>
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
        <div class="ditails">
          <h2>Ditails</h2>
        </div>
        <article class="charracter-ditails" v-if="currentCharacter">

          <h4>{{currentCharacter.name}}</h4>
             <p>Height: {{currentCharacter.height}}cm</p>
             <p>Mass: {{currentCharacter.mass}}kg</p>
             <p>Hair color: {{currentCharacter.hair_color}} </p>
             <p>Skin color: {{currentCharacter.skin_color}} </p>
             <p>Eye color: {{currentCharacter.eye_color}}</p>
             <p>Birth year: {{currentCharacter.brith_year}}</p>
             <p>Gender: {{currentCharacter.gender}}</p>

        </article>
        <article class="planet-ditails" v-if="!planetLoading">
          <h4>{{currentPlanet.name}}</h4>
         <p>Rotation_period: {{currentPlanet.roration_period}}</p>
         <p>Orbital_period: {{currentPlanet.orbital_period}}</p>
         <p>Diameter: {{currentPlanet.diameter}}</p>
         <p>Climate: {{currentPlanet.climate}}</p>
        <p>Gravity: {{currentPlanet.gravity}} </p>
         <p>Terrian: {{currentPlanet.terrain}}</p>
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
<style lang="scss" >
html,
body {
  width: 1440px;
  margin: auto;
  // margin: 0;
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
  justify-content: center;
}

section:nth-of-type(1) h2 {
  width: 500px;
  // border-radius: 10px 10px 0 0;
  background-color: #535556;
  color: #ffd600;
  margin: 0;
  height: 3.5rem;
  // border-radius: 10px 10px 0px 0px;
  letter-spacing: 6px;
  font-size: 2rem;
  font-weight: 400;
  padding: 15px 0;
  grid-row: 1;
  grid-column: 1/7;
  text-align: center;
}
.character-list{
  width: 500px;
  margin-left: 15rem;
   background-color: #c4c4c4;
  transform: translateY(-6%);
  height: 40rem;


  // width: 26rem;

  ul{
     padding: 0;
     margin: 0;
     li:hover {
      background-color: #444444;
      cursor: pointer;
    }

    li{
      list-style: none;
      text-align: start;

    }
    li:nth-child(even) {
      color: grey;
      background-color: #e1dede;
      list-style-type: none;
      padding: 10px;
      font-size: 1.4rem;
    }
    li:nth-child(odd) {
      color: #eee;
      background-color: grey;
      list-style-type: none;
      padding: 10px;
      font-size: 1.4rem;
    }

  }
  button{
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 1rem;
  }
}
.ditails{
  background-color: #8e8e8e;
  width: 500px;

  // transform: translateY(-76%);
    padding: 0;
  h2{
    margin: 0;
    color: #ffd600;
      font-size: 2rem;
      text-align: center;
    font-weight: 400;
    padding: 10px 0;
    letter-spacing: 6px;

  }

  height: 5rem;
}
section.character-info {
  width: 500px;

  border-radius: 10px 10px 0 0;
  transform: translateY(-6%);
  // display: flex;
  // background-color: #748687;
  // color: #ffd600;
  // margin: 0;
  // height: 3.5rem;
  // justify-content: center;
  // align-items: center;
  // border-radius: 10px 10px 0px 0px;
  // letter-spacing: 6px;
  // font-size: 2rem;
  // font-weight: 400;
  // padding: 10px 0;
}
.planet-ditails{

  //  background-color: #c4c4c4;
    margin: 0;
    padding: 25px 0 20px 20px;
    font-size: 1.1rem;
    line-height: 5px;
    // height: 180px;
    h3 {
      font-size: 2rem;
      letter-spacing: 3px;
      font-weight: 100;
    }
}
</style>
