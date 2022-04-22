import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
  },
  getters: {},
  mutations: {
    saveCharacters(state, chars) {
      state.characters = chars;
    },
  },
  actions: {
    async fetchCharacters(context) {
      console.log(context);
      const response = await fetch("http://swapi.dev/api/people");
      const data = await response.json();
      context.commit("saveCharacters", data.results);
    },
  },
  modules: {},
});
