<template>
  <div class="input">
    <select name="color" v-model="color" @change="updateStore">
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["spot"],
  data() {
    return {
      color: "natural",
    };
  },
  computed: {
    ...mapGetters(["colorFurniture"]),
  },
  methods: {
    updateStore() {
      this.colorFurniture[this.spot] = this.color;
    },
  },
};
</script>
