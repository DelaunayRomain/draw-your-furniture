<template>
  <div class="separation" :style="cssStyle">
    <div v-if="addHardware" class="space">
      <add-hardware-logic :space="space" :shelf="shelf"></add-hardware-logic>
    </div>
    <div v-if="addColor" class="space">
      <add-color-logic :space="space" :shelf="shelf"></add-color-logic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddHardwareLogic from "../logic/AddHardwareLogic.vue";
import AddColorLogic from "../logic/AddColorLogic.vue";

export default {
  components: { AddHardwareLogic, AddColorLogic },
  props: ["space", "shelf", "addHardware", "addColor"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["shelfs", "colorFurniture", "colors"]),
    cssStyle() {
      return {
        width: this.space.width + "%",
        borderLeft: this.space.id === 0 ? "" : "5px solid " + this.colorBorder,
      };
    },
    colorBorder() {
      return this.addColor
        ? this.colors[this.colorFurniture.chants]
        : this.colors["black"];
    },
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
.separation {
  display: inline-block;
  height: 100%;
}
.space {
  width: 100%;
  height: 100%;
}
</style>
