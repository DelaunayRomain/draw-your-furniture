<template>
  <section class="show-furniture">
    <h1>... y haz click en el/los espacios de tu eleccion</h1>
    <ul>
      <shelf
        v-for="shelf in shelfs"
        :key="shelf.id"
        :shelf="shelf"
        :addHardware="true"
      ></shelf>
    </ul>
    <span
      ><router-link class="arrow left" to="/add-separators">&larr;</router-link
      ><router-link class="arrow right" to="/color" @click="stages.color = true"
        >&rarr;</router-link
      ></span
    >
  </section>
  <add-hardware-form></add-hardware-form>
</template>

<script>
import Shelf from '../components/furniture/Shelf.vue';
import AddHardwareForm from '../components/forms/AddHardwareForm.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Shelf, AddHardwareForm },
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

.container {
  text-align: left;
  vertical-align: middle;
  margin-left: 5rem;
  border: 2px solid rgb(117, 62, 14);
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
}
</style>
