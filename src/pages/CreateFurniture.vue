<template>
  <section class="page">
    <keep-alive>
      <create-furniture-form></create-furniture-form>
    </keep-alive>
    <div class="show-furniture">
      <div v-if="shelfs.length > 0">
        <h1>Haz click en el espacio para cambiar su altura</h1>
        <ul>
          <shelf
            v-for="shelf in shelfs"
            :key="shelf.id"
            :shelf="shelf"
            class="shelf"
            :shelfHeightLogic="true"
          ></shelf>
        </ul>
        <span
          ><router-link class="arrow left" to="/select-furniture"
            >&larr; </router-link
          ><router-link
            class="arrow right"
            @click="unlockNextPage"
            to="/add-separators"
          >
            &rarr;
          </router-link>
        </span>
      </div>
      <p v-else>Completa el formulario, y se dibujara tu mueble aqui!</p>
    </div>
  </section>
</template>

<script>
import CreateFurnitureForm from '../components/forms/CreateFurnitureForm.vue';
import Shelf from '../components/furniture/Shelf.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    CreateFurnitureForm,
    Shelf,
  },
  computed: {
    ...mapGetters(['shelfs', 'stages']),
  },
  methods: {
    unlockNextPage() {
      this.stages.addSeparators = true;
    },
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

h1 {
  margin-bottom: 2rem;
}
</style>
