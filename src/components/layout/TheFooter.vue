<template>
  <footer>
    <router-link class="arrow arrow--left" to="/create-furniture"
      >&larr;</router-link
    >
    <router-link class="arrow arrow--right" to="/add-hardware"
      >&rarr;</router-link
    >
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["stages"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/constants.scss";
@import "../../assets/styles/arrows.scss";

footer {
  display: none;

  @include respond(phone) {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 5rem;
    background-color: #3d008d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
