<template>
  <header>
    <nav>
      <h1><router-link to="/">Muebles Barquillo</router-link></h1>
      <router-link
        to="/select-furniture"
        :class="{ disabled: !stages.selectFurniture }"
      >
        1
      </router-link>
      <p>-></p>
      <router-link
        to="/create-furniture"
        :class="{ disabled: !stages.createFurniture }"
      >
        2
      </router-link>
      <p>-></p>
      <router-link
        to="/add-separators"
        :class="{ disabled: !stages.addSeparators }"
      >
        3
      </router-link>
      <p>-></p>
      <router-link
        to="/add-hardware"
        :class="{ disabled: !stages.addHardware }"
      >
        4
      </router-link>
      <p>-></p>
      <router-link to="/color" :class="{ disabled: !stages.color }">
        5
      </router-link>
      <button>ayuda</button>
    </nav>
  </header>
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

header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;

  @include respond(phone) {
    height: 10rem;
  }
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.navigation {
  display: flex;
}

.disabled {
  opacity: 0.2;
  pointer-events: none;
}
</style>
