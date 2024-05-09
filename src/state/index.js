import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    count: 0,
    language: 'en',
  },
  mutations: {
    // can use arrow functions to declare mutations
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    // this isnt used yet
    setLanguage: (state, lang) => {
      state.language = lang;
    },
  },
});
