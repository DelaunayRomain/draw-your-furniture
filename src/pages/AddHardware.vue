<template>
  <add-hardware-form></add-hardware-form>
  <section class="show-furniture">
    <h1>Selectionna el/los espacios de tu eleccion</h1>
    <ul class="furniture">
      <shelf
        v-for="shelf in shelfs"
        :key="shelf.id"
        :shelf="shelf"
        :addHardware="true"
      ></shelf>
    </ul>
    <router-link class="arrow arrow--left" to="/add-separators"
      >&larr;</router-link
    >
    <legs></legs>
    <router-link
      class="arrow arrow--right"
      to="/color"
      @click="stages.color = true"
      >&rarr;</router-link
    >
  </section>
</template>

<script>
import Shelf from "../components/furniture/Shelf.vue";
import Legs from "../components/furniture/Legs.vue";
import AddHardwareForm from "../components/forms/AddHardwareForm.vue";
import { mapGetters } from "vuex";
export default {
  components: { Shelf, AddHardwareForm, Legs },
  computed: {
    ...mapGetters(["shelfs", "stages"]),
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/constants.scss";
@import "../assets/styles/furniture.scss";
@import "../assets/styles/arrows.scss";

h1 {
  @include respond(phone) {
    margin-top: -1rem;
  }
}
</style>
