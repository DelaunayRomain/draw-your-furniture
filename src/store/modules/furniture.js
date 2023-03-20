export default {
  state() {
    return {
      totalHeight: null,
      totalWidth: null,
      shelfs: [],
      colorFurniture: {
        chants: 'natural',
        background: 'natural',
        hardware: 'natural',
        legs: 'natural',
      },
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
    colorFurniture(state) {
      return state.colorFurniture;
    },
  },
  actions: {
    updateShelfInStore(context, payload) {
      context.commit(context.updateShelfInStore, payload);
    },
  },
};
