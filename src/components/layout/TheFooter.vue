<template>
  <footer>
    <div class="before" :style="beforeStyle">
      <p>Anterior</p>
      <router-link class="arrow arrow--left arrow--footer" :to="beforePath"
        >&larr;</router-link
      >
    </div>
    <div class="after" :style="nextStyle">
      <router-link class="arrow arrow--right arrow--footer" :to="nextPath"
        >&rarr;</router-link
      >
      <p>Siguiente</p>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      path: {
        "/": {
          next: undefined,
          before: undefined,
        },
        "/select-furniture": {
          next: "/create-furniture",
          before: undefined,
        },
        "/create-furniture": {
          next: "/add-separators",
          before: "/select-furniture",
        },
        "/add-separators": {
          next: "/add-hardware",
          before: "/create-furniture",
        },
        "/add-hardware": {
          next: "/color",
          before: "/add-separators",
        },
        "/color": {
          next: undefined,
          before: "/add-hardware",
        },
      },
    };
  },
  computed: {
    ...mapGetters(["stages"]),
    beforePath() {
      return !this.path[this.$route.path].before
        ? this.path[this.$route.path]
        : this.path[this.$route.path].before;
    },
    nextPath() {
      return !this.path[this.$route.path].next
        ? this.path[this.$route.path]
        : this.path[this.$route.path].next;
    },
    beforeStyle() {
      return !this.path[this.$route.path].before ? { display: "none" } : "";
    },
    nextStyle() {
      return !this.path[this.$route.path].next ? { display: "none" } : "";
    },
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

.before,
.after {
  display: flex;
}

p {
  color: white;
  flex: 1;
  font-size: 1.3rem;
}

.arrow--footer {
  display: inline-block;
  color: white;
  margin-top: 0.2rem;
  flex: 1;
}
</style>
