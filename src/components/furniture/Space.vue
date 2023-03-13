<template>
  <div class="separation" :style="{ width: this.mySpace.width + '%' }">
    <div v-if="$route.path === '/add-hardware'">
      <add-hardware-logic
        :mySpace="mySpace"
        :myShelf="myShelf"
        class="separation"
      ></add-hardware-logic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddHardwareLogic from '../logic/AddHardwareLogic.vue';

export default {
  components: { AddHardwareLogic },
  props: ['mySpace', 'myShelf'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['shelfs', 'hardware', 'totalWidth']),
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.separation {
  display: inline-block;
  height: 100%;
  border-right: 2px solid rgb(117, 62, 14);
}
</style>
