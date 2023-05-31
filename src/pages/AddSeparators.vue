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

    <router-link class="arrow left" to="/create-furniture">&larr;</router-link>
    <legs></legs
    ><router-link class="arrow right" @click="unlockNextPage" to="/add-hardware"
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
  margin-top: 2rem;
}

.furniture {
  margin-left: 7.9rem;
  padding-left: 0;
}

.left {
  float: left;
}

.right {
  float: right;
}
</style>
