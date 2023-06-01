<template>
  <div class="flex-container">
    <error-modal
      v-if="error.state"
      title="Un error ocurrió"
      @close="handleError"
    >
      <p>{{ error.message }}</p>
    </error-modal>
    <div class="shelf" :style="cssStyle" @click="openUpdateModal">
      <div v-if="isUpdating">
        <div class="update-input">
          <input type="number" v-model="newHeight" /><span>cm</span>
        </div>
      </div>
      <p v-else>{{ shelf.height }} cm</p>
    </div>
    <button v-if="isUpdating" class="button" @click="updateFurniture">
      OK
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ErrorModal from "./../layout/ErrorModal.vue";
export default {
  components: { ErrorModal },
  props: ["shelf"],
  data() {
    return {
      error: { state: null, message: "" },
      isUpdating: false,
      newHeight: this.shelf.height,
      someShelf: this.shelf,
    };
  },
  computed: {
    ...mapGetters(["totalHeightForShelfs", "shelfs"]),
    cssStyle() {
      return {
        backgroundColor: this.isUpdating
          ? "rgba(117, 62, 14, 0.2)"
          : this.someShelf.confirmed
          ? "rgba(109, 206, 128, 0.2)"
          : "",
      };
    },
    newHeightForUnconfirmedShelfs() {
      return (
        (this.totalHeightForShelfs - this.confirmedShelfsTotalHeight) /
        this.amountOfUnconfirmedShelfs
      ).toFixed(1);
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
      return this.newHeight && this.newHeight > 15;
    },
    isValidHeightForUnconfirmedShelfs() {
      return (
        (this.totalHeightForShelfs -
          this.confirmedShelfsTotalHeight -
          this.newHeight) /
          (this.amountOfUnconfirmedShelfs - 1) >
        15
      );
    },
    identifiedShelf() {
      return this.shelfs.find((shelf) => shelf.id === this.someShelf.id);
    },
  },
  methods: {
    updateFurniture() {
      this.checkValidity();
      if (this.error.state === true) return;
      this.updateShelfHeight();
      this.updateOtherShelfsHeights();
      this.updateShelfInStore();
      this.isUpdating = false;
    },
    checkValidity() {
      if (!this.isValidHeight) {
        this.error.state = true;
        this.error.message =
          "La altura de cada espacio ne puede ser inferior a 15cm";
      } else if (!this.isValidHeightForUnconfirmedShelfs) {
        this.error.state = true;
        this.error.message =
          "La altura restante para los otros espacios no puede ser inferior a 15cm cada uno";
      }
    },
    updateShelfHeight() {
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
    handleError() {
      this.error = { state: null, message: "" };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
.shelf {
  width: 100%;
  height: 100%;
}

input {
  margin-top: 0.9rem;
  width: 4rem;
}

.update-input {
  margin-top: 0.5rem;
  display: inline-block;
}

.button {
  display: inline-block;
  margin-left: 1rem;
}

.flex-container {
  display: flex;
  align-items: center;
}
</style>
