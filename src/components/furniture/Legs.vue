<template>
  <div class="legs" :style="cssLegs">
    <legs-svg class="leg left-leg"></legs-svg>
    <legs-svg class="leg right-leg"></legs-svg>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import LegsSvg from './../../assets/img/LegsSvg.vue';
export default {
  components: { LegsSvg },
  computed: {
    ...mapGetters(['totalWidth']),
    cssLegs() {
      return { width: this.totalWidth * 3 + 'px' };
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
