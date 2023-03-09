<template>
  <section class="general-form">
    <h2>Separadores</h2>
    <div v-if="isUpdating">
      <form @submit.prevent="clearData">
        <div class="furniture-input">
          <label>Cuantos Separadores ?</label>
          <select
            name="amountOfSeparators"
            id="amountOfSeparators"
            v-model.number="amountOfSeparators"
            @change="updateSeparators"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="furniture-input">
          <label>Que orientacion ?</label>
          <select
            name="typeOfSeparators"
            id="typeOfSeparators"
            v-model="typeOfSeparators"
            @change="updateSeparators"
          >
            <option value="centered">centrado</option>
            <option value="left">izquierda</option>
            <option value="right">derecha</option>
          </select>
        </div>
        <button>Confirmar</button>
      </form>
    </div>
    <div v-else>
      <h2>Haz click en el espacio para agregar separadores</h2>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['myUpdatingShelf'],
  data() {
    return {
      amountOfSeparators: 0,
      typeOfSeparators: 'centered',
      isUpdating: false,
    };
  },
  computed: {
    ...mapGetters(['shelfs']),
    updatingShelf() {
      return this.shelfs.find((shelf) => shelf === this.myUpdatingShelf);
    },
    widthVariationRelatedToTypeOfSeparator() {
      const objectTypeSeparators = {
        centered: 0,
        left: -12 / this.updatingShelf.insideSpaces.amountOfSeparators,
        right: 12 / this.updatingShelf.insideSpaces.amountOfSeparators,
      };
      return objectTypeSeparators[
        this.updatingShelf.insideSpaces.typeOfSeparators
      ];
    },
    spaceWidth() {
      const mapSpaceWidth = new Map([
        [0, 100],
        [1, 50 + this.widthVariationRelatedToTypeOfSeparator],
        [2, 33.3 + this.widthVariationRelatedToTypeOfSeparator],
        [3, 25 + this.widthVariationRelatedToTypeOfSeparator],
      ]);

      return mapSpaceWidth.get(this.amountOfSeparators);
    },
    remainingWidth() {
      return 100 - this.amountOfSeparators * this.spaceWidth;
    },
  },
  methods: {
    updateSeparators() {
      this.updatingShelf.insideSpaces.amountOfSeparators =
        this.amountOfSeparators;
      this.updatingShelf.insideSpaces.typeOfSeparators = this.typeOfSeparators;
      this.pushSpacesIntoArray();
    },
    pushSpacesIntoArray() {
      this.updatingShelf.insideSpaces.spaces = [];
      this.pushSeparatorWidth();
      this.pushRemainingWidth();
    },
    pushSeparatorWidth() {
      for (
        let id = 0;
        id < this.updatingShelf.insideSpaces.amountOfSeparators;
        id++
      ) {
        this.updatingShelf.insideSpaces.spaces.push({
          id: id,
          width: this.spaceWidth,
        });
      }
    },
    pushRemainingWidth() {
      this.updatingShelf.insideSpaces.spaces.push({
        id: this.updatingShelf.insideSpaces.spaces.length,
        width: this.remainingWidth,
      });
    },
    clearData() {
      this.updatingShelf.insideSpaces.isUpdating = false;
      this.isUpdating = false;
      this.amountOfSeparators = 0;
      this.typeOfSeparators = 'centered';
    },
  },
  watch: {
    myUpdatingShelf() {
      this.isUpdating = true;
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
