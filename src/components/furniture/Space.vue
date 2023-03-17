<template>
  <div class="separation" :style="{ width: this.mySpace.width + '%' }">
    <div v-if="addHardware" class="space">
      <add-hardware-logic
        :mySpace="mySpace"
        :myShelf="myShelf"
      ></add-hardware-logic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddHardwareLogic from '../logic/AddHardwareLogic.vue';

export default {
  components: { AddHardwareLogic },
  props: ['mySpace', 'myShelf', 'addHardware'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['shelfs']),
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
.space {
  width: 100%;
  height: 100%;
}
</style>
