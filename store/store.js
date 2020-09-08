import axios from "@/services/axios.js";

export const state = () => ({
  data: {},
  isLoading: false,
  isToggle: false,
  isDarkMode: false
});

export const mutations = {
  SET_DATA(state, data) {
    state.data = data;
  },
  SET_LOADING(state, loading) {
    state.isLoading = loading;
  },
  SET_TOGGLE(state) {
    state.isToggle = !state.isToggle;
  },
  SET_DARK_MODE(state, darkMode) {
    state.isDarkMode = darkMode;
  }
};

export const actions = {
  async fetchData({ commit, dispatch }, { url, lang }) {
    commit("SET_LOADING", true);
    const response = await axios.getData(url);
    if (process.env.NODE_ENV === "production") {
      commit("SET_DATA", response.data[lang]);
    } else {
      commit("SET_DATA", response.data);
    }
    if (response.status === 200) {
      dispatch("loading", { loading: false, duration: 1500 });
    }
  },
  loading({ commit }, { loading, duration }) {
    setTimeout(() => {
      commit("SET_LOADING", loading);
    }, duration);
  }
};
