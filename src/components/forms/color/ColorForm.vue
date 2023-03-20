<template>
  <section class="general-form">
    <h1>Agrega color a tu mueble!</h1>
    <form @submit.prevent="addColorToFurnitureInStore">
      <h3>Que color ?</h3>
      <div class="input">
        <select name="color" v-model="color">
          <option value="natural">Pino natural</option>
          <option value="red">Rojo</option>
          <option value="blue">Azul</option>
          <option value="yellow">Amarillo</option>
          <option value="green">Verde</option>
          <option value="pink">Rosado</option>
          <option value="white">Blanco</option>
          <option value="black">Negro</option>
          <option value="grey">Gris</option>
        </select>
      </div>
      <h3>Que parte del mueble ?</h3>
      <div class="input">
        <div>
          <input type="checkbox" v-model="spot" value="chants" id="chants" />
          <label for="chants">Cantos</label>
        </div>
        <div>
          <input
            type="checkbox"
            v-model="spot"
            value="hardware"
            id="hardware"
          />
          <label for="hardware">Quincailleria</label>
        </div>

        <div>
          <input
            type="checkbox"
            v-model="spot"
            value="background"
            id="background"
          />
          <label for="background">Fondo</label>
        </div>
        <div>
          <input type="checkbox" v-model="spot" value="legs" id="legs" />
          <label for="legs">Patas</label>
        </div>
      </div>
      <button>Ver mueble colorado!</button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import InputColorForm from './InputColorForm.vue';
export default {
  components: { InputColorForm },
  data() {
    return {
      color: 'natural',
      spot: [],
    };
  },
  computed: {
    ...mapGetters(['colorFurniture']),
  },
  methods: {
    addColorToFurnitureInStore() {
      this.colorFurniture.color = this.color;
      this.colorFurniture.spot = this.spot;
    },
  },
};
</script>

<style scoped>
.general-form {
  float: left;
  width: 28vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  margin-right: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  min-height: 70vh;
  background-color: white;
}

.input {
  text-align: left;
  margin-bottom: 2rem;
}
</style>
