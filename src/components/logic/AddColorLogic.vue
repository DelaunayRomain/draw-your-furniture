<template>
  <div class="hardware" :style="cssStyle">
    <display-hardware-handle-logic
      :space="space"
      :shelf="shelf"
    ></display-hardware-handle-logic>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DisplayHardwareHandleLogic from './DisplayHardwareHandleLogic.vue';
export default {
  components: { DisplayHardwareHandleLogic },
  props: ['space', 'shelf'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['shelfs', 'hardware', 'colorFurniture', 'colors']),
    cssStyle() {
      return {
        backgroundColor: this.space.hardware ? this.backgroundColor : '',
      };
    },
    backgroundColor() {
      return this.colorFurniture.spot.includes('hardware')
        ? this.colors[this.colorFurniture.color]
        : 'rgb(245,245,220)';
    },
  },
  methods: {},
};
</script>

<style scoped>
.hardware {
  width: 100%;
  height: 100%;
}
</style>
