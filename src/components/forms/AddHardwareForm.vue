<template>
  <section class="general-form">
    <h1>Selectiona el elemento a agregar</h1>
    <div class="container">
      <div
        class="hardware hardware--door"
        @click="unlockHardware('door')"
        :style="hardware.door === true ? styleIfUnlocked : ''"
      >
        <p>Puerta</p>
      </div>
      <div
        class="hardware hardware--folding-door"
        @click="unlockHardware('foldingDoor')"
        :style="hardware.foldingDoor === true ? styleIfUnlocked : ''"
      >
        <p>Puerta abatible</p>
      </div>
      <div
        class="hardware hardware--drawer"
        @click="unlockHardware('drawer')"
        :style="hardware.drawer === true ? styleIfUnlocked : ''"
      >
        <p>Cajon</p>
      </div>
    </div>
    <div class="hardware--reset" @click="resetFurnitureHardware">
      <p>Borrar elementos</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["hardware", "shelfs"]),
    styleIfUnlocked() {
      return {
        transform: "scale(1.2)",
      };
    },
  },
  methods: {
    unlockHardware(typeOfHardware) {
      this.resetHardware();
      this.hardware[typeOfHardware] = true;
    },
    resetHardware() {
      this.hardware.door = false;
      this.hardware.foldingDoor = false;
      this.hardware.drawer = false;
    },
    resetFurnitureHardware() {
      this.resetHardware();
      this.shelfs.forEach(function (shelf) {
        shelf.insideSpaces.spaces.forEach((space) => (space.hardware = ""));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
@import "../../assets/styles/forms.scss";

.container {
  @include respond(phone) {
    display: flex;
  }
}

p {
  vertical-align: middle;
  text-align: center;
}
.hardware {
  text-align: center;
  margin: 3rem;
  padding: 1rem;
  transition: 0.2s;
  cursor: pointer;
  border: solid;
  font-size: 1.2rem;

  @include respond(phone) {
    width: 25%;
    flex: 1;
    margin: 0.5rem;
    padding: 0;
  }

  &--door {
    background-color: rgb(255, 127, 80);
  }

  &--folding-door {
    background-color: rgb(189, 183, 107);
    @include respond(phone) {
      display: none;
    }
  }

  &--drawer {
    background-color: rgb(0, 139, 139);
  }

  &--reset {
    text-align: center;
    margin: 3rem;
    transition: 0.2s;
    cursor: pointer;
    border: solid;
    font-size: 1.2rem;

    @include respond(phone) {
      width: 60%;
      margin: 1rem auto;
    }
  }
}
</style>
