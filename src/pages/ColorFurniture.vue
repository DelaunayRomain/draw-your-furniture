<template>
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

    <router-link class="arrow left" to="/add-hardware">&larr;</router-link>
    <legs :addColor="true"></legs>
    <button class="right">Generar cotizacion</button>
  </section>
  <color-form></color-form>
</template>

<script>
import Shelf from '../components/furniture/Shelf.vue';
import Legs from '../components/furniture/Legs.vue';
import ColorForm from '../components/forms/color/ColorForm.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Shelf, ColorForm, Legs },
  computed: {
    ...mapGetters(['shelfs', 'stages', 'totalWidth']),
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

.furniture {
  border: 1px solid black;
  margin-left: 7.9rem;
  padding-left: 0;
}

.arrow {
  text-decoration: none;
  color: black;
  font-size: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 2rem;
}

.left {
  float: left;
}

.right {
  float: right;
  margin-right: 1rem;
}
</style>
