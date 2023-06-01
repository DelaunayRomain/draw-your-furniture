<template>
  <div
    @click="updateSeparatorsInShelf"
    class="shelf"
    :style="{ backgroundColor: shelfBackgroundColor }"
  >
    <space
      v-for="space in shelf.insideSpaces.spaces"
      :key="space.id"
      :space="space"
      :shelf="shelf"
      :logic="undefined"
    ></space>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Space from "../furniture/Space.vue";
export default {
  components: { Space },
  props: ["shelf"],
  emits: ["updating-separators"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["shelfs"]),
    identifiedShelf() {
      return this.shelfs.find((shelf) => shelf.id === this.shelf.id);
    },
    computedAmountOfSeparators() {
      return this.identifiedShelf.insideSpaces.amountOfSeparators;
    },
    shelfBackgroundColor() {
      return this.identifiedShelf.insideSpaces.isUpdating === true
        ? "rgba(109, 206, 128, 0.2)"
        : "";
    },
  },
  methods: {
    updateSeparatorsInShelf() {
      this.shelfs.forEach((shelf) => (shelf.insideSpaces.isUpdating = false));
      this.identifiedShelf.insideSpaces.isUpdating = true;
      this.$emit("updating-separators", this.identifiedShelf);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
.shelf {
  width: 100%;
  height: 100%;
}
</style>
