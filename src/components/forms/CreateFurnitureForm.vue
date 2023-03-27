<template>
  <section class="general-form">
    <h2>Informacion general del mueble</h2>
    <form @submit.prevent="createFurniture">
      <div class="furniture-input">
        <div><label>Altura en cm?</label></div>
        <input type="number" v-model="furniture.totalHeight" />
      </div>
      <div class="furniture-input">
        <div><label>Ancho en cm?</label></div>
        <input type="number" v-model="furniture.totalWidth" />
      </div>
      <div class="furniture-input">
        <div><label>Cuantos espacios horizontales ?</label></div>
        <input type="number" v-model="furniture.shelfsAmount" />
      </div>
      <button>Ver mueble</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      furniture: {
        shelfs: [],
        totalHeight: 0,
        totalWidth: 0,
        shelfsAmount: 0,
        colorFurniture: {
          chants: 'natural',
          background: 'white',
          hardware: 'natural',
          legs: 'natural',
        },
      },
    };
  },
  computed: {
    shelfHeight() {
      return this.furniture.totalHeight / this.furniture.shelfsAmount;
    },
  },
  methods: {
    createFurniture() {
      this.createShelfs();
      this.$store.state.furniture = this.furniture;
    },
    createShelfs() {
      this.furniture.shelfs = [];
      for (let id = 0; id < this.furniture.shelfsAmount; id++) {
        this.furniture.shelfs.push(this.pushShelf(id));
      }
    },
    pushShelf(id) {
      return {
        id: id,
        height: this.shelfHeight,
        confirmed: false,
        insideSpaces: {
          isUpdating: false,
          amountOfSeparators: 0,
          typeOfSeparators: 'centered',
          spaces: [{ id: 0, width: 100 }],
        },
      };
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 3rem;
}
input {
  font: inherit;
  padding: 0.15rem;
}
label {
  display: inline-block;
  text-align: center;
}
button {
  margin-top: 2rem;
  font-size: 1.3rem;
}
.general-form {
  float: left;
  width: 28vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  margin-right: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  height: 70vh;
  background-color: white;
}

.furniture-input {
  margin-bottom: 2rem;
}
</style>
