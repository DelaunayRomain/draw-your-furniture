<template>
  <section class="show-furniture">
    <h1>... y haz click en el/los espacios de tu eleccion</h1>
    <ul class="furniture">
      <shelf
        v-for="shelf in shelfs"
        :key="shelf.id"
        :shelf="shelf"
        :addHardware="true"
      ></shelf>
    </ul>
    <router-link class="arrow left" to="/add-separators">&larr;</router-link>
    <legs></legs>
    <router-link class="arrow right" to="/color" @click="stages.color = true"
      >&rarr;</router-link
    >
  </section>
  <add-hardware-form></add-hardware-form>
</template>

<script>
import Shelf from '../components/furniture/Shelf.vue';
import Legs from '../components/furniture/Legs.vue';
import AddHardwareForm from '../components/forms/AddHardwareForm.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Shelf, AddHardwareForm, Legs },
  computed: {
    ...mapGetters(['shelfs', 'stages']),
  },
  created() {},
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
}
</style>
