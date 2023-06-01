<template>
  <section class="home">
    <h1>Generador de librero a medida</h1>
    <h3>
      Que sea para soñar tu librero perfecto o porque realmente quieres
      cotizarlo, disfruta el juego de crearlo tu!
    </h3>
    <button>
      <router-link
        @click="unlockNextPage"
        to="/select-furniture"
        class="router-link"
        >Empezar ahora &#x2794;
      </router-link>
    </button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["stages"]),
  },
  methods: {
    unlockNextPage() {
      this.stages.selectFurniture = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/constants.scss";

.home {
  background-color: beige;
  text-align: center;
  height: 100vh;
  padding-top: 10rem;
}

h1 {
  font-size: 2rem;
  padding-bottom: 3rem;
}

h3 {
  margin-left: 20vw;
  margin-right: 20vw;
  padding-bottom: 2rem;
}

button {
  transform: translateX(20rem);
  @include respond(phone) {
    transform: translateX(0);
  }
}

.router-link {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
}
</style>
