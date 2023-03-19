<template>
  <section class="general-form">
    <h1>Agrega color a tu mueble!</h1>
    <form submit.prevent="addColorToFurniture">
      <h3>Que tipo de terminacion ?</h3>
      <div class="input">
        <div>
          <input type="radio" v-model="typeOfColor" value="ink" id="ink" />
          <label for="ink">tinta marca Milesi</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="typeOfColor"
            value="acrilic"
            id="acrilic"
          />
          <label for="acrilic">pintura acrilica marca Krack</label>
        </div>
      </div>
      <h3>Que color ?</h3>
      <div class="input">
        <div v-if="typeOfColor === 'ink'">
          <select name="color">
            <option value="oak">Roble</option>
            <option value="walnut">Nogal</option>
          </select>
        </div>
        <div v-if="typeOfColor === 'acrilic'">
          <select name="color">
            <option value="red">Rojo</option>
            <option value="blue">Azul</option>
            <option value="yellow">Amarillo</option>
            <option value="green">Verde</option>
            <option value="pink">Rosado</option>
            <option value="white">Blanco</option>
            <option value="black">Negro</option>
            <option value="grey">Gris</option>
          </select>
        </div>
      </div>
      <div v-if="typeOfColor === 'acrilic'">
        <h3>Que parte del mueble ?</h3>
        <div class="input">
          <div>
            <input
              type="checkbox"
              v-model="whereToColor"
              value="chants"
              id="chants"
            />
            <label for="chants">Cantos</label>
          </div>
          <div>
            <input
              type="checkbox"
              v-model="whereToColor"
              value="hardware"
              id="hardware"
            />
            <label for="hardware">Quincailleria</label>
          </div>
          <div>
            <input
              type="checkbox"
              v-model="whereToColor"
              value="insideSpaces"
              id="insideSpaces"
            />
            <label for="insideSpaces">Espacios interiores</label>
          </div>
          <div>
            <input
              type="checkbox"
              v-model="whereToColor"
              value="background"
              id="background"
            />
            <label for="background">Fondo</label>
          </div>
          <div>
            <input
              type="checkbox"
              v-model="whereToColor"
              value="legs"
              id="legs"
            />
            <label for="legs">Patas</label>
          </div>
        </div>
      </div>
      <button>Ver mueble colorado!</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      typeOfColor: '',
      color: '',
      whereToColor: [],
    };
  },
  computed: {},
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
