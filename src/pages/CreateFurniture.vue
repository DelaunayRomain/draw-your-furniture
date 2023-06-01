<template>
  <section class="page">
    <keep-alive>
      <create-furniture-form></create-furniture-form>
    </keep-alive>
    <div class="show-furniture">
      <div v-if="shelfs.length > 0">
        <h1>Haz click en el espacio para cambiar su altura</h1>
        <ul class="furniture">
          <shelf
            v-for="shelf in shelfs"
            :key="shelf.id"
            :shelf="shelf"
            :shelfHeightLogic="true"
          ></shelf>
        </ul>
        <router-link class="arrow arrow--left" to="/select-furniture"
          >&larr;
        </router-link>
        <legs></legs>
        <router-link
          class="arrow arrow--right"
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
import CreateFurnitureForm from "../components/forms/CreateFurnitureForm.vue";
import Shelf from "../components/furniture/Shelf.vue";
import Legs from "../components/furniture/Legs.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CreateFurnitureForm,
    Shelf,
    Legs,
  },
  computed: {
    ...mapGetters(["shelfs", "stages", "totalWidth"]),
  },
  methods: {
    unlockNextPage() {
      this.stages.addSeparators = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/constants.scss";
@import "../assets/styles/furniture.scss";
@import "../assets/styles/arrows.scss";
</style>
