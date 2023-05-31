<template>
  <div :style="cssStyle" class="hardware" @click="addHardwareToSpace">
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
    return {
      someSpace: this.space,
    };
  },
  computed: {
    ...mapGetters(["shelfs", "hardware"]),
    cssStyle() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
    backgroundColor() {
      const hardwareObject = {
        door: "rgb(255, 127, 80)",
        foldingDoor: "rgb(189, 183, 107)",
        drawer: "rgb(0, 139, 139)",
      };
      return hardwareObject[this.space.hardware];
    },
    identifiedSpace() {
      const space = this.shelf.insideSpaces.spaces.find(
        (space) => space.id === this.space.id
      );
      return space;
    },
  },
  methods: {
    addHardwareToSpace() {
      this.resetHardwareInSpace();
      this.pushHardware();
      this.updateSpaceInStore();
    },
    resetHardwareInSpace() {
      if (this.someSpace.hardware) {
        this.someSpace.hardware = "";
      }
    },
    pushHardware() {
      if (this.hardware.door === true) {
        this.someSpace.hardware = "door";
      } else if (this.hardware.foldingDoor === true) {
        this.someSpace.hardware = "foldingDoor";
      } else if (this.hardware.drawer === true) {
        this.someSpace.hardware = "drawer";
      }
    },
    updateSpaceInStore() {
      this.identifiedSpace = this.someSpace;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
.hardware {
  width: 100%;
  height: 100%;
}
</style>
