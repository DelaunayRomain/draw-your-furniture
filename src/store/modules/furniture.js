export default {
  state() {
    return {
      totalHeight: null,
      totalWidth: null,
      shelfs: [],
    };
  },
  mutations: {},
  getters: {
    shelfs(state) {
      return state.shelfs;
    },
    totalHeight(state) {
      return state.totalHeight;
    },
    totalWidth(state) {
      return state.totalWidth;
    },
    shelfsAmount(state) {
      return state.shelfsAmount;
    },
  },
  actions: {},
};
