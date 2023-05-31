<template>
  <section class="general-form">
    <h1>Cantos:</h1>
    <span><input-color-form spot="chants"></input-color-form></span>
    <h1>Trasera:</h1>
    <span><input-color-form spot="background"></input-color-form></span>
    <h1>Quincailleria:</h1>
    <span><input-color-form spot="hardware"></input-color-form></span>
    <h1>Patas:</h1>
    <span><input-color-form spot="legs"></input-color-form></span>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import InputColorForm from './InputColorForm.vue';
export default {
  components: { InputColorForm },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['colorFurniture']),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/mixins.scss";
@import "../../../assets/styles/constants.scss";
@import "../../../assets/styles/forms.scss";
.input {
  text-align: left;
  margin-bottom: 2rem;
}
</style>
