<template>
  <div v-if="logic === 'shelfHeightLogic'">
    <shelf-height-logic
      :myShelf="myShelf"
      :style="cssStyle"
      class="shelf"
    ></shelf-height-logic>
  </div>
  <div v-if="logic === 'addSeparatorsLogic'">
    <add-separators-logic
      :myShelf="myShelf"
      :style="cssStyle"
      @updating-separators="emitUpdatingSeparators"
      class="shelf"
    ></add-separators-logic>
  </div>
  <div v-if="logic === 'addHardware'" :style="cssStyle" class="shelf">
    <space
      v-for="space in myShelf.insideSpaces.spaces"
      :key="space.id"
      :mySpace="space"
      :myShelf="myShelf"
      logic="addHardware"
    ></space>
  </div>
</template>

<script>
import ShelfHeightLogic from '../logic/ShelfHeightLogic.vue';
import AddSeparatorsLogic from '../logic/AddSeparatorsLogic.vue';
import Space from './Space.vue';
import { mapGetters } from 'vuex';
export default {
  components: { ShelfHeightLogic, Space, AddSeparatorsLogic },
  props: ['myShelf', 'logic'],
  emits: ['updating-separators'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['totalWidth', 'shelfs']),
    cssStyle() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.myShelf.height * 3 + 'px',
      };
    },
  },
  methods: {
    emitUpdatingSeparators(shelf) {
      this.$emit('updating-separators', shelf);
    },
  },
  created() {},
};
</script>

<style scoped>
.shelf {
  margin-left: 5rem;
  border: 2px solid rgb(117, 62, 14);
}
</style>
