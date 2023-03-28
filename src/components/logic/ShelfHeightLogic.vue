<template>
  <div class="flex-container">
    <div class="shelf" :style="cssStyle" @click="openUpdateModal">
      <div v-if="isUpdating">
        <div class="update-input">
          <input
            type="number"
            v-model="newHeight"
            :placeholder="shelf.height"
          /><span>cm</span>
        </div>
      </div>
      <p v-else>{{ someShelf.height }} cm</p>
    </div>
    <button v-if="isUpdating" class="button" @click="updateFurniture">
      OK
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['shelf'],
  data() {
    return {
      isUpdating: false,
      newHeight: null,
      someShelf: this.shelf,
    };
  },
  computed: {
    ...mapGetters(['totalHeight', 'shelfs']),
    cssStyle() {
      return {
        backgroundColor: this.isUpdating
          ? 'rgba(117, 62, 14, 0.2)'
          : this.someShelf.confirmed
          ? 'rgba(109, 206, 128, 0.2)'
          : '',
      };
    },
    newHeightForUnconfirmedShelfs() {
      return (
        (this.totalHeight - this.confirmedShelfsTotalHeight) /
        this.amountOfUnconfirmedShelfs
      );
    },
    amountOfUnconfirmedShelfs() {
      return this.shelfs.filter((shelf) => shelf.confirmed === false).length;
    },
    confirmedShelfsTotalHeight() {
      return this.shelfs
        .filter((shelf) => shelf.confirmed === true)
        .reduce((acc, shelf) => acc + shelf.height, 0);
    },
    isValidHeight() {
      return this.newHeight && this.newHeight > 0;
    },
    identifiedShelf() {
      return this.shelfs.find((shelf) => shelf.id === this.someShelf.id);
    },
  },
  methods: {
    updateFurniture() {
      this.updateShelfHeight();
      this.updateOtherShelfsHeights();
      this.updateShelfInStore();
      this.isUpdating = false;
    },
    updateShelfHeight() {
      if (!this.isValidHeight) return;
      this.someShelf.height = this.newHeight;
      this.someShelf.confirmed = true;
    },
    updateOtherShelfsHeights() {
      this.shelfs.forEach((shelf) => {
        if (shelf.confirmed === false)
          shelf.height = this.newHeightForUnconfirmedShelfs;
      });
    },
    updateShelfInStore() {
      this.identifiedShelf = this.someShelf;
    },
    openUpdateModal() {
      this.isUpdating = true;
    },
  },
};
</script>

<style scoped>
.shelf {
  width: 100%;
  height: 100%;
}

input {
  margin-top: 10px;
  width: 50px;
}

.update-input {
  margin-top: 0.5rem;
  display: inline-block;
}

.button {
  display: inline-block;
  margin-left: 1.5rem;
}

.flex-container {
  display: flex;
  align-items: center;
}
</style>
