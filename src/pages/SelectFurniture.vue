<template>
  <h1>Selectiona que tipo de mueble quieres diseñar</h1>
  <router-link class="furniture" to="/create-furniture" @click="unlockNextPage">
    <h2 class="furniture--name">Librero unitario</h2>
    <img
      class="furniture--img"
      src="./../assets/img/librero-unitario.jpeg"
      alt=""
    />
    <h4 class="description">(maximum 225cm alto y 150cm ancho)</h4></router-link
  >
  <div class="furniture furniture--others">
    <h2 class="furniture--name">Pronto otras opciones...</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["stages"]),
  },
  methods: {
    unlockNextPage() {
      this.stages.createFurniture = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/constants.scss";

h1 {
  margin-top: 2rem;
  text-align: center;
}
.furniture {
  width: 30vw;
  height: 80vh;
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem;
  border-radius: 10px;
  background-color: white;

  @include respond(phone) {
    width: 90vw;
    margin-left: 5vw;
  }

  &--others {
    @include respond(phone) {
      height: auto;
      margin-bottom: 8rem;
    }
  }

  &--name {
    text-align: center;
  }

  &--img {
    position: absolute;
    margin-top: 2rem;
    left: 50%;
    max-width: 90%;
    max-height: 80%;
    border-radius: 5px;
    transform: translateX(-50%);
  }
}

.description {
  text-align: center;
}
</style>
