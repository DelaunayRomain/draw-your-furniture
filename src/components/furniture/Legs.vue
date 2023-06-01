<template>
  <div class="legs" :style="cssWidthForLegs">
    <legs-svg-left
      :addColor="addColor"
      class="leg leg--left"
      :color="colorLegs"
    ></legs-svg-left>
    <legs-svg-right
      :addColor="addColor"
      class="leg leg--right"
      :color="colorLegs"
    ></legs-svg-right>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import LegsSvgRight from "./../../assets/img/LegsSvgRight.vue";
import LegsSvgLeft from "./../../assets/img/LegsSvgLeft.vue";
export default {
  components: { LegsSvgLeft, LegsSvgRight },
  props: ["addColor"],
  computed: {
    ...mapGetters(["totalWidth", "colorFurniture", "colors"]),
    cssWidthForLegs() {
      return { width: this.totalWidth * 3 + "px" };
    },
    colorLegs() {
      return this.addColor
        ? this.colors[this.colorFurniture.legs]
        : this.colors["black"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
.leg {
  height: 100%;
  width: auto;

  &--right {
    float: right;
    margin-right: 1rem;
  }

  &--left {
    float: left;
    margin-left: 1rem;
  }
}

.legs {
  margin-top: -1rem;
  float: left;
  height: 30px;
  margin-left: 3rem;

  @include respond(phone) {
    margin: 0;
  }
}
</style>
