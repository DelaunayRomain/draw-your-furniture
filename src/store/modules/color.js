export default {
  state() {
    return {
      colors: {
        red: { spanish: 'Rojo', css: 'rgb(178, 34, 34)' },
        blue: { spanish: 'Azul', css: 'rgb(30, 144, 255)' },
        yellow: { spanish: 'Amarillo', css: 'rgb(255, 215, 0)' },
        green: { spanish: 'Verde', css: 'rgb(34, 139, 34)' },
        pink: { spanish: 'Rosado', css: 'rgb(255, 105, 180)' },
        white: { spanish: 'Blanco', css: 'rgb(255, 255, 255)' },
        black: { spanish: 'Negro', css: 'rgb(0, 0, 0)' },
        grey: { spanish: 'Gris', css: 'rgb(169, 169, 169)' },
        brown: { spanish: 'Cafe', css: 'rgb(139, 69, 19)' },
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
