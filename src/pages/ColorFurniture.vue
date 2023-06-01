<template>
  <section class="show-furniture">
    <h1>Elige si agregar color a tu mueble</h1>
    <ul>
      <shelf
        v-for="shelf in shelfs"
        :key="shelf.id"
        :shelf="shelf"
        :addColor="true"
      ></shelf>
    </ul>
    <span>
      <router-link class="arrow left" to="/add-hardware"
        >&larr;</router-link
      ></span
    >
    <span><button class="right">Generar cotizacion</button></span>
  </section>
  <color-form></color-form>
</template>

<script>
import Shelf from '../components/furniture/Shelf.vue';
import ColorForm from '../components/forms/ColorForm.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Shelf, ColorForm },
  computed: {
    ...mapGetters(['shelfs', 'stages']),
  },
};
</script>

<style scoped>
.show-furniture {
  float: right;
  width: 58vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  margin-left: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  background-color: white;
}

h1 {
  margin-bottom: 1rem;
}

.container {
  text-align: left;
  vertical-align: middle;
  margin-left: 5rem;
  border-right: 2px solid rgb(117, 62, 14);
  border-top: 2px solid rgb(117, 62, 14);
  border-left: 2px solid rgb(117, 62, 14);
}

.arrow {
  text-decoration: none;
  color: black;
  font-size: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
}

.left {
  float: left;
}

.right {
  float: right;

  margin-right: 1rem;
}
</style>
