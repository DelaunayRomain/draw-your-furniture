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

@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media screen and (max-width: 37.5em) {
      @content;
    }
  }
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  font-size: 100%;

  @include respond(phone) {
    font-size: 45%;
  }
}

body {
  margin: 0;
  background-color: beige;
}
</style>
