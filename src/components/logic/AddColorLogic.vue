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
    return {
      someSpace: this.space,
    };
  },
  computed: {
    ...mapGetters(['shelfs', 'hardware']),
    cssStyle() {
      return {
        backgroundColor: this.space.hardware ? 'rgb(245,245,220)' : '',
      };
    },
    identifiedSpace() {
      const space = this.shelf.insideSpaces.spaces.find(
        (space) => space.id === this.space.id
      );
      return space;
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
