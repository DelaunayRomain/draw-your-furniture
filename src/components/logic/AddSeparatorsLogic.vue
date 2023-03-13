<template>
  <div
    @click="updateSeparatorsInShelf"
    class="shelf"
    :style="{ backgroundColor: shelfBackgroundColor }"
  >
    <space
      v-for="space in myShelf.insideSpaces.spaces"
      :key="space.id"
      :mySpace="space"
      :myShelf="myShelf"
      :logic="undefined"
    ></space>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Space from '../furniture/Space.vue';
export default {
  components: { Space },
  props: ['myShelf'],
  emits: ['updating-separators'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['shelfs']),
    identifiedShelf() {
      return this.shelfs.find((shelf) => shelf.id === this.myShelf.id);
    },
    computedAmountOfSeparators() {
      return this.identifiedShelf.insideSpaces.amountOfSeparators;
    },
    shelfBackgroundColor() {
      return this.identifiedShelf.insideSpaces.isUpdating === true
        ? 'rgba(109, 206, 128, 0.2)'
        : '';
    },
    widthVariationRelatedToTypeOfSeparator() {
      const objectTypeSeparators = {
        centered: 0,
        left: -12 / this.computedAmountOfSeparators,
        right: 10 / this.computedAmountOfSeparators,
      };
      return objectTypeSeparators[
        this.identifiedShelf.insideSpaces.typeOfSeparators
      ];
    },
    spaceWidth() {
      const mapSpaceWidth = new Map([
        ([0, 100],
        [1, 50 + this.widthVariationRelatedToTypeOfSeparator],
        [2, 33.3 + this.widthVariationRelatedToTypeOfSeparator],
        [3, 25 + this.widthVariationRelatedToTypeOfSeparator]),
      ]);
      return mapSpaceWidth.get(this.computedAmountOfSeparators);
    },
  },
  methods: {
    updateSeparatorsInShelf() {
      this.shelfs.forEach((shelf) => (shelf.insideSpaces.isUpdating = false));
      this.identifiedShelf.insideSpaces.isUpdating = true;
      this.$emit('updating-separators', this.identifiedShelf);
    },
  },
};
</script>

<style scoped>
.shelf {
  width: 100%;
  height: 100%;
}
</style>
