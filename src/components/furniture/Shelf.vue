<template>
  <div v-if="shelfHeightLogic">
    <shelf-height-logic
      :shelf="shelf"
      :style="cssStyle"
      class="shelf"
    ></shelf-height-logic>
  </div>
  <div v-if="addSeparatorsLogic">
    <add-separators-logic
      :shelf="shelf"
      :style="cssStyle"
      @updating-separators="emitUpdatingSeparators"
      class="shelf"
    ></add-separators-logic>
  </div>
  <div v-if="addHardware || addColor" :style="cssStyle" class="shelf">
    <space
      v-for="space in shelf.insideSpaces.spaces"
      :key="space.id"
      :space="space"
      :shelf="shelf"
      :addHardware="addHardware"
      :addColor="addColor"
    ></space>
  </div>
</template>

<script>
import ShelfHeightLogic from '../logic/ShelfHeightLogic.vue';
import AddSeparatorsLogic from '../logic/AddSeparatorsLogic.vue';
import Space from './Space.vue';
import { mapGetters } from 'vuex';
export default {
  components: { ShelfHeightLogic, Space, AddSeparatorsLogic },
  props: [
    'shelf',
    'shelfHeightLogic',
    'addSeparatorsLogic',
    'addHardware',
    'addColor',
  ],
  emits: ['updating-separators'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['totalWidth', 'shelfs', 'colorFurniture', 'colors']),
    cssStyle() {
      return {
        width: this.totalWidth * 3 + 'px',
        height: this.shelf.height * 3 + 'px',
        borderTop: this.shelf.id === 0 ? '2px solid ' + this.colorBorder : '',
        borderLeft: '2px solid ' + this.colorBorder,
        borderRight: '2px solid ' + this.colorBorder,
        borderBottom: '2px solid ' + this.colorBorder,
      };
    },
    colorBorder() {
      return this.addColor
        ? this.colors[this.colorFurniture.chants]
        : 'rgb(117, 62, 14)';
    },
  },
  methods: {
    emitUpdatingSeparators(shelf) {
      this.$emit('updating-separators', shelf);
    },
  },
};
</script>

<style scoped>
.shelf {
  margin-left: 5rem;
  border-right: 2px solid rgb(117, 62, 14);
  border-left: 2px solid rgb(117, 62, 14);
  border-bottom: 2px solid rgb(117, 62, 14);
}
</style>
