<template>
  <section class="general-form">
    <h2>Informacion general del mueble</h2>
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
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      height: 0,
      width: 0,
      shelfsAmount: 0,
      someShelfs: [],
    };
  },
  computed: {
    ...mapGetters(['legsHeight']),
    shelfHeight() {
      return (this.heightForShelfs / this.shelfsAmount).toFixed(2);
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
      return this.width < 150;
    },
    isValidHeight() {
      return this.height < 225;
    },
    isValidAmountOfShelfs() {
      return this.shelfHeight > 15;
    },
  },
  methods: {
    createFurniture() {
      if (
        !this.isValidHeight ||
        !this.isValidWidth ||
        !this.isValidAmountOfShelfs
      )
        return;
      this.createShelfs();
      this.$store.commit('addFurnitureToStore', this.payload);
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
          typeOfSeparators: 'centered',
          spaces: [{ id: 0, width: 100 }],
        },
      };
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 3rem;
}
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
.general-form {
  float: left;
  width: 28vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  margin-right: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  height: 70vh;
  background-color: white;
}

.furniture-input {
  margin-bottom: 2rem;
}
</style>
