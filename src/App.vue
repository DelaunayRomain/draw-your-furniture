<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import "./assets/styles/mixins.scss";
@import "./assets/styles/constants.scss";

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  font-size: 100%;

  @include respond(phone) {
    font-size: 80%;
  }
}

body {
  margin: 0;
  background-color: beige;
}
</style>
