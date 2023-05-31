<template>
  <error-modal v-if="error.state" title="An error ocurred" @close="handleError">
    <p>{{ error.message }}</p>
  </error-modal>
  <keep-alive>
    <add-separator-form
      :some-shelf="computedUpdatingShelf"
      @is-valid="checkValidity"
    ></add-separator-form>
  </keep-alive>
  <section class="show-furniture">
    <h1>Elige donde poner los separadores</h1>
    <ul class="furniture">
      <keep-alive
        ><shelf
          v-for="shelf in shelfs"
          :key="shelf.id"
          :shelf="shelf"
          @updating-separators="passIdentifiedShelfToForm"
          :addSeparatorsLogic="true"
        ></shelf
      ></keep-alive>
    </ul>

    <router-link class="arrow arrow--left" to="/create-furniture"
      >&larr;</router-link
    >
    <legs></legs
    ><router-link
      class="arrow arrow--right"
      @click="unlockNextPage"
      to="/add-hardware"
      >&rarr;</router-link
    >
  </section>
</template>

<script>
import AddSeparatorForm from "../components/forms/AddSeparatorForm.vue";
import Shelf from "../components/furniture/Shelf.vue";
import Legs from "../components/furniture/Legs.vue";
import ErrorModal from "./../components/layout/ErrorModal.vue";
import { mapGetters } from "vuex";
export default {
  components: { Shelf, AddSeparatorForm, Legs, ErrorModal },
  data() {
    return {
      updatingShelfForSeparators: "",
      error: { state: null, message: "add more separators to empty shelfs" },
      isValid: true,
    };
  },
  computed: {
    ...mapGetters(["shelfs", "stages"]),
    computedUpdatingShelf() {
      return this.updatingShelfForSeparators;
    },
  },
  methods: {
    unlockNextPage() {
      if (!this.isValid) this.error.state = true;
      this.stages.addHardware = true;
    },
    passIdentifiedShelfToForm(shelf) {
      this.updatingShelfForSeparators = shelf;
    },
    checkValidity(isValid) {
      this.isValid = isValid;
    },
    handleError() {
      this.error = { state: null, message: "" };
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
