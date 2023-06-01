<template>
  <div
    v-if="space.hardware === 'door'"
    class="handle door"
    :style="{ float: this.doorSide, marginTop: this.doorMarginTop }"
  ></div>
  <div
    v-if="space.hardware === 'foldingDoor'"
    class="handle foldingDoor"
    :style="{ marginTop: this.marginTopForDownHandle }"
  ></div>
  <div v-if="space.hardware === 'drawer'" class="handle drawer"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["space", "shelf"],
  computed: {
    ...mapGetters(["shelfs"]),
    doorSide() {
      return this.space.id === 0 ? "right" : "left";
    },
    doorMarginTop() {
      return this.isDoorInHighPosition ? this.marginTopForDownHandle : "5%";
    },
    marginTopForDownHandle() {
      return this.shelf.height * 3 * 0.8 + "px";
    },
    isDoorInHighPosition() {
      return this.shelfHeightFromTheGround > 150;
    },
    shelfHeightFromTheGround() {
      return this.belowShelfs.reduce(
        (cumulatedHeight, shelf) => cumulatedHeight + shelf.height,
        0
      );
    },
    belowShelfs() {
      return this.shelfs.filter((shelf) => shelf.id > this.shelf.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
.door {
  margin: 5%;
}
.handle {
  height: 1rem;
  width: 1rem;
  border: solid;
  background-color: white;
  border-radius: 50%;
}

.drawer {
  float: left;
  margin-left: 50%;
  margin-top: 5%;
  transform: translateX(-50%);
}

.foldingDoor {
  float: left;
  margin-top: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
