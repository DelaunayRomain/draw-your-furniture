<template>
  <keep-alive>
    <add-separator-form :someShelf="computedUpdatingShelf"></add-separator-form>
  </keep-alive>
  <section class="show-furniture">
    <h1>Elige donde poner los separadores</h1>
    <ul>
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
import AddSeparatorForm from '../components/forms/AddSeparatorForm.vue';
import Shelf from '../components/furniture/Shelf.vue';
import Legs from '../components/furniture/Legs.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Shelf, AddSeparatorForm, Legs },
  data() {
    return {
      updatingShelfForSeparators: '',
    };
  },
  computed: {
    ...mapGetters(['shelfs', 'stages']),
    computedUpdatingShelf() {
      return this.updatingShelfForSeparators;
    },
  },
  methods: {
    unlockNextPage() {
      this.stages.addHardware = true;
    },
    passIdentifiedShelfToForm(shelf) {
      this.updatingShelfForSeparators = shelf;
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

.left {
  float: left;
}

.right {
  float: right;
}
</style>
