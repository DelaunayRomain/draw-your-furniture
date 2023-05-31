<template>
  <div class="hardware" :style="cssStyle">
    <display-hardware-handle-logic
      :space="space"
      :shelf="shelf"
    ></display-hardware-handle-logic>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DisplayHardwareHandleLogic from "./DisplayHardwareHandleLogic.vue";
export default {
  components: { DisplayHardwareHandleLogic },
  props: ["space", "shelf"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["shelfs", "hardware", "colorFurniture", "colors"]),
    cssStyle() {
      return {
        backgroundColor: this.backgroundColor,
        border: this.isBlack ? "1px solid white" : "1px solid black",
      };
    },
    backgroundColor() {
      return this.space.hardware
        ? this.colorFurniture.hardware
        : this.colorFurniture.background;
    },
    isBlack() {
      return (
        this.colorFurniture.chants === "black" &&
        this.backgroundColor === "black"
      );
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
.hardware {
  width: 100%;
  height: 100%;
  border: 1px solid white;
}
</style>
