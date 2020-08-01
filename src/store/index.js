import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    favorites: [],

    items: [{ date: "" }, { date: "" }, { date: "" }],
  },
  mutations: {
    setUser: (state, payload) => {
      if (payload.uid == null) {
        return;
      }

      state.user = payload;
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user != null;
    },

    favoritesCount(state) {
      if (state.favorites == null) {
        return 0;
      }

      return state.favorites.length;
    },

    itemsInKart(state) {
      const validItems = state.items.filter((i) => i.date < "");
      return validItems;
    },
  },
  actions: {},
  modules: {},
});