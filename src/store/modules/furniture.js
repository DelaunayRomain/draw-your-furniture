export default {
  state() {
    return {
      totalHeight: null,
      totalWidth: null,
      shelfs: [],
      shelfsAmount: null,
    };
  },
  mutations: {
    updateShelfInStore(state, payload) {
      state.shelfs.splice(payload.shelfindex, 1, payload.newShelf);
    },
  },
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
  actions: {
    updateShelfInStore(context, payload) {
      context.commit(context.updateShelfInStore, payload);
    },
  },
};
