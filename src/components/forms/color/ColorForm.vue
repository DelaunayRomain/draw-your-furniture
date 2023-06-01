<template>
  <section class="general-form">
    <h1>Agregale color a tu mueble</h1>
    <div class="container">
      <div class="input-container">
        <h2>Cantos:</h2>
        <input-color-form spot="chants"></input-color-form>
      </div>
      <div class="input-container">
        <h2>Trasera:</h2>
        <input-color-form spot="background"></input-color-form>
      </div>
      <div class="input-container">
        <h2>Puertas/cajones:</h2>
        <input-color-form spot="hardware"></input-color-form>
      </div>
      <div class="input-container">
        <h2>Patas:</h2>
        <input-color-form spot="legs"></input-color-form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import InputColorForm from "./InputColorForm.vue";
export default {
  components: { InputColorForm },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["colorFurniture"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/mixins.scss";
@import "../../../assets/styles/constants.scss";
@import "../../../assets/styles/forms.scss";

h2,
input-color-form {
  @include respond(phone) {
    flex: 1;
  }
}

h2 {
  @include respond(phone) {
    margin-top: -0.3rem;
  }
}

.container {
  @include respond(phone) {
    padding-right: 1.4rem;
    padding-top: 0.5rem;
  }
}
.input-container {
  @include respond(phone) {
    display: flex;
  }
}
</style>
