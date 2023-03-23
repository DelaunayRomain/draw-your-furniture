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
            :shelfHeightLogic="true"
          ></shelf>
        </ul>
        <router-link class="arrow left" to="/select-furniture"
          >&larr;
        </router-link>
        <legs></legs>
        <router-link
          class="arrow right"
          @click="unlockNextPage"
          to="/add-separators"
        >
          &rarr;
        </router-link>
      </div>
      <p v-else>Completa el formulario, y se dibujara tu mueble aqui!</p>
    </div>
  </section>
</template>

<script>
import CreateFurnitureForm from '../components/forms/CreateFurnitureForm.vue';
import Shelf from '../components/furniture/Shelf.vue';
import Legs from '../components/furniture/Legs.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    CreateFurnitureForm,
    Shelf,
    Legs,
  },
  computed: {
    ...mapGetters(['shelfs', 'stages', 'totalWidth']),
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
  margin-top: 2rem;
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
