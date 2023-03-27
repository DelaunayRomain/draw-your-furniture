export default {
  state() {
    return {
      totalHeight: 0,
      totalWidth: 0,
      legsHeight: 10,
      totalHeightForShelfs: 0,
      shelfs: [],
      colorFurniture: {
        chants: 'natural',
        background: 'white',
        hardware: 'natural',
        legs: 'natural',
      },
    };
  },
  mutations: {
    updateShelfInStore(state, payload) {
      state.shelfs.splice(payload.shelfindex, 1, payload.newShelf);
    },
    addFurnitureToStore(state, payload) {
      state.shelfs = payload.shelfs;
      state.totalHeight = payload.height;
      state.totalHeightForShelfs = payload.heightForShelfs;
      state.totalWidth = payload.width;
    },
  },
  getters: {
    shelfs(state) {
      return state.shelfs;
    },
    totalHeight(state) {
      return state.totalHeight;
    },
    totalHeightForShelfs(state) {
      return state.totalHeightForShelfs;
    },
    totalWidth(state) {
      return state.totalWidth;
    },
    legsHeight(state) {
      return state.legsHeight;
    },
    colorFurniture(state) {
      return state.colorFurniture;
    },
  },
  actions: {
    updateShelfInStore(context, payload) {
      context.commit(context.updateShelfInStore, payload);
    },
    addFurnitureToStore(context, payload) {
      context.commit(context.addFurnitureToStore, payload);
    },
  },
};
