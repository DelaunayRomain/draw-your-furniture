<template>
  <section class="general-form">
    <h1>Separadores</h1>
    <h4 class="description" v-if="totalWidth > 80 && isUpdating">
      Tu librero mide mas de 80cm de ancho, tienes que agregarle por lo menos 1
      separador por espacio!
    </h4>
    <div v-if="isUpdating">
      <form @submit.prevent="clearData">
        <div class="furniture-input">
          <label>Cantidad de separadores:</label>
          <select
            name="amountOfSeparators"
            id="amountOfSeparators"
            class="input"
            v-model.number="this.shelf.insideSpaces.amountOfSeparators"
            @change="updateSeparators"
          >
            <option v-if="totalWidth < 80" value="0">0</option>
            <option value="1">1</option>
            <option v-if="totalWidth > 70" value="2">2</option>
            <option v-if="totalWidth > 100" value="3">3</option>
          </select>
        </div>
        <div class="furniture-input">
          <label>Symetrico/asymetrico :</label>
          <select
            name="typeOfSeparators"
            id="typeOfSeparators"
            class="input"
            v-model="shelf.insideSpaces.typeOfSeparators"
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
      <h2>
        Haz click a dentro de un espacio del mueble para agregar separadores
      </h2>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["currentShelf"],
  data() {
    return {
      isUpdating: false,
    };
  },
  computed: {
    ...mapGetters(["shelfs", "totalWidth"]),
    shelf() {
      return this.currentShelf;
    },
    identifiedShelf() {
      return this.shelfs.find((shelf) => shelf === this.currentShelf);
    },
    widthVariationRelatedToTypeOfSeparator() {
      const objectTypeSeparators = {
        centered: 0,
        left: -12 / this.shelf.insideSpaces.amountOfSeparators,
        right: 12 / this.shelf.insideSpaces.amountOfSeparators,
      };
      return objectTypeSeparators[this.shelf.insideSpaces.typeOfSeparators];
    },
    spaceWidth() {
      const mapSpaceWidth = new Map([
        [0, 100],
        [1, 50 + this.widthVariationRelatedToTypeOfSeparator],
        [2, 33.3 + this.widthVariationRelatedToTypeOfSeparator],
        [3, 25 + this.widthVariationRelatedToTypeOfSeparator],
      ]);

      return mapSpaceWidth.get(this.shelf.insideSpaces.amountOfSeparators);
    },
    remainingWidth() {
      return 100 - this.shelf.insideSpaces.amountOfSeparators * this.spaceWidth;
    },
    payload() {
      return {
        newShelf: this.shelf,
        shelfIndex: this.shelfs.findIndex(
          (shelf) => shelf === this.currentShelf
        ),
      };
    },
  },
  methods: {
    ...mapActions(["updateShelfInStore"]),
    updateSeparators() {
      this.pushSpacesIntoArray();
      this.$store.commit("updateShelfInStore", this.payload);
    },
    pushSpacesIntoArray() {
      this.shelf.insideSpaces.spaces = [];
      this.pushSeparatorWidth();
      this.pushRemainingWidth();
    },
    pushSeparatorWidth() {
      for (let id = 0; id < this.shelf.insideSpaces.amountOfSeparators; id++) {
        this.shelf.insideSpaces.spaces.push({
          id: id,
          width: this.spaceWidth,
        });
      }
    },
    pushRemainingWidth() {
      this.shelf.insideSpaces.spaces.push({
        id: this.shelf.insideSpaces.spaces.length,
        width: this.remainingWidth,
      });
    },
    clearData() {
      this.shelf.insideSpaces.isUpdating = false;
      this.isUpdating = false;
    },
  },
  watch: {
    currentShelf() {
      this.isUpdating = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
@import "../../assets/styles/forms.scss";

.input {
  font: inherit;
  padding: 0.15rem;
  margin-left: 0.5rem;
}

h1 {
  @include respond(phone) {
    display: none;
  }
}

label {
  display: inline-block;
  text-align: center;
}
button {
  margin-top: 2rem;
  font-size: 1.3rem;

  @include respond(phone) {
    margin-top: 0;
  }
}

.description {
  color: red;
  margin-bottom: 2rem;
}

.furniture-input {
  margin-bottom: 2rem;
}
</style>
