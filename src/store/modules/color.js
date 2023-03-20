export default {
  state() {
    return {
      colors: {
        natural: 'rgb(245,245,220)',
        red: 'rgb(178, 34, 34)',
        blue: 'rgb(30, 144, 255)',
        yellow: 'rgb(255, 215, 0)',
        green: 'rgb(34, 139, 34)',
        pink: 'rgb(255, 105, 180)',
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)',
        grey: 'rgb(169, 169, 169)',
        brown: 'rgb(139, 69, 19)',
      },
    };
  },
  mutations: {},
  getters: {
    colors(state) {
      return state.colors;
    },
  },
  actions: {},
};
