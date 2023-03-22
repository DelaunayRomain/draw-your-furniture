<template>
  <div class="legs" :style="cssWidthForLegs">
    <legs-svg class="leg left-leg" :color="colorLegs"></legs-svg>
    <legs-svg class="leg right-leg" :color="colorLegs"></legs-svg>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import LegsSvg from './../../assets/img/LegsSvg.vue';
export default {
  components: { LegsSvg },
  props: ['addColor'],
  computed: {
    ...mapGetters(['totalWidth', 'colorFurniture', 'colors']),
    cssWidthForLegs() {
      return { width: this.totalWidth * 3 + 'px' };
    },
    colorLegs() {
      return this.addColor
        ? this.colors[this.colorFurniture.legs]
        : 'rgb(117, 62, 14)';
    },
  },
};
</script>

<style scoped>
.left-leg {
  float: left;
  margin-left: 12px;
}

.right-leg {
  float: right;
  margin-right: 12px;
}

.leg {
  height: 100%;
  width: auto;
}

.legs {
  margin-top: -1rem;
  float: left;
  height: 30px;
  margin-left: 3rem;
}
</style>
