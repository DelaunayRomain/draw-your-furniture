<template>
  <div :style="cssStyle" class="hardware" @click="addHardwareToSpace">
    <display-hardware-handle-logic
      :space="mySpace"
      :shelf="myShelf"
    ></display-hardware-handle-logic>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DisplayHardwareHandleLogic from './DisplayHardwareHandleLogic.vue';
export default {
  components: { DisplayHardwareHandleLogic },
  props: ['mySpace', 'myShelf'],
  data() {
    return {
      space: this.mySpace,
    };
  },
  computed: {
    ...mapGetters(['shelfs', 'hardware']),
    cssStyle() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
    backgroundColor() {
      if (this.space.hardware === 'door') {
        return 'rgb(255, 127, 80)';
      } else if (this.space.hardware === 'foldingDoor') {
        return 'rgb(189, 183, 107)';
      } else if (this.space.hardware === 'drawer') {
        return 'rgb(0, 139, 139)';
      } else {
        return '';
      }
    },
    identifiedSpace() {
      const space = this.shelf.insideSpaces.spaces.find(
        (space) => space.id === this.mySpace.id
      );
      return space;
    },
  },
  methods: {
    addHardwareToSpace() {
      this.resetHardwareInSpace();
      this.pushHardware();
      console.log(this.space.hardware);
      this.updateSpaceInStore();
    },
    resetHardwareInSpace() {
      if (this.space.hardware) {
        this.space.hardware = '';
      }
    },
    pushHardware() {
      if (this.hardware.door === true) {
        this.space.hardware = 'door';
      } else if (this.hardware.foldingDoor === true) {
        this.space.hardware = 'foldingDoor';
      } else if (this.hardware.drawer === true) {
        this.space.hardware = 'drawer';
      }
    },
    updateSpaceInStore() {
      this.identifiedSpace = this.space;
    },
  },
  created() {},
};
</script>

<style scoped>
.hardware {
  width: 100%;
  height: 100%;
}
</style>
