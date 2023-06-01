<template>
  <color-form></color-form>
  <section class="show-furniture">
    <h1>Elige si agregar color a tu mueble</h1>
    <ul class="furniture" :style="{ width: totalWidth * 3 + 2 + 'px' }">
      <shelf
        v-for="shelf in shelfs"
        :key="shelf.id"
        :shelf="shelf"
        :addColor="true"
      ></shelf>
    </ul>

    <router-link class="arrow arrow--left" to="/add-hardware"
      >&larr;</router-link
    >
    <legs :addColor="true"></legs>
    <button class="arrow--right btn">Generar cotizacion</button>
  </section>
</template>

<script>
import Shelf from "../components/furniture/Shelf.vue";
import Legs from "../components/furniture/Legs.vue";
import ColorForm from "../components/forms/color/ColorForm.vue";
import { mapGetters } from "vuex";
export default {
  components: { Shelf, ColorForm, Legs },
  computed: {
    ...mapGetters(["shelfs", "stages", "totalWidth"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/constants.scss";
@import "../assets/styles/furniture.scss";
@import "../assets/styles/arrows.scss";

.furniture {
  border: 1px solid black;
}

.btn {
  @include respond(phone) {
    display: none;
  }
}

h1 {
  @include respond(phone) {
    display: none;
  }
}
</style>
