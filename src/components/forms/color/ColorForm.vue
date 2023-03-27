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

<style scoped>
.general-form {
  float: left;
  width: 28vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  margin-right: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  min-height: 70vh;
  background-color: white;
}

.input {
  text-align: left;
  margin-bottom: 2rem;
}
</style>
