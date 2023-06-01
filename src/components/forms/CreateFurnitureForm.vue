<template>
  <error-modal v-if="error.state" title="Un error ocurrió" @close="handleError">
    <p>{{ error.message }}</p>
  </error-modal>
  <section class="general-form" v-if="!shelfs.length > 0">
    <h1>Informacion general del mueble</h1>
    <form @submit.prevent="createFurniture">
      <div class="furniture-input">
        <div><label>Altura en cm?</label></div>
        <input type="number" v-model="height" />
      </div>
      <div class="furniture-input">
        <div><label>Ancho en cm?</label></div>
        <input type="number" v-model="width" />
      </div>
      <div class="furniture-input">
        <div><label>Cuantos espacios horizontales ?</label></div>
        <input type="number" v-model="shelfsAmount" />
      </div>
      <button>Ver mueble</button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ErrorModal from "./../layout/ErrorModal.vue";
export default {
  components: { ErrorModal },
  data() {
    return {
      error: { state: null, message: "" },
      height: 0,
      width: 0,
      shelfsAmount: 0,
      someShelfs: [],
    };
  },
  computed: {
    ...mapGetters(["legsHeight", "shelfs"]),
    shelfHeight() {
      return (this.heightForShelfs / this.shelfsAmount).toFixed(1);
    },
    heightForShelfs() {
      return this.height - this.legsHeight - this.sumOfShelfsThickness;
    },
    sumOfShelfsThickness() {
      return (this.shelfsAmount + 1) * 1.6;
    },
    payload() {
      return {
        shelfs: this.someShelfs,
        height: this.height,
        width: this.width,
        heightForShelfs: this.heightForShelfs,
      };
    },
    isValidWidth() {
      return this.width > 50 && this.width < 150;
    },
    isValidHeight() {
      return this.height > 120 && this.height < 225;
    },
    isValidAmountOfShelfs() {
      return this.shelfHeight > 15;
    },
  },
  methods: {
    createFurniture() {
      this.checkValidity();
      if (this.error.state === true) return;
      this.createShelfs();
      this.$store.commit("addFurnitureToStore", this.payload);
    },
    checkValidity() {
      if (!this.isValidHeight) {
        this.error.state = true;
        this.error.message = "La altura tiene que ser entre 125cm y 225cm";
      } else if (!this.isValidWidth) {
        this.error.state = true;
        this.error.message = "El ancho tiene que ser entre 50cm y 150cm";
      } else if (!this.isValidAmountOfShelfs) {
        this.error.state = true;
        this.error.message =
          "Hay demasiados espacios, la altura divido por la cantidad de espacios no puede ser inferior a 15cm";
      }
    },
    createShelfs() {
      this.someShelfs = [];
      for (let id = 0; id < this.shelfsAmount; id++) {
        this.someShelfs.push(this.pushShelf(id));
      }
    },
    pushShelf(id) {
      return {
        id: id,
        height: this.shelfHeight,
        confirmed: false,
        insideSpaces: {
          isUpdating: false,
          amountOfSeparators: 0,
          typeOfSeparators: "centered",
          spaces: [{ id: 0, width: 100 }],
        },
      };
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
@import "../../assets/styles/forms.scss";

input {
  font: inherit;
  padding: 0.15rem;
}
label {
  display: inline-block;
  text-align: center;
}
button {
  margin-top: 2rem;
  font-size: 1.3rem;
}
.furniture-input {
  margin-bottom: 2rem;
}
</style>
