<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      :src="imgSrc"
      class="hidden-pokemon"
      alt="pokémon"
    />
    <img v-else :src="imgSrc" class="fade-in" alt="pokémon" />
  </div>
</template>

<script>
  export default {
    props: {
      pokemonId: {
        type: Number,
        required: true,
      },
      showPokemon: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    computed: {
      /* Aprovecha la reactividad de Vue.js para mantener automáticamente la consistencia
      entre la propiedad imgSrc y pokemonId. Si pokemonId cambia en algún momento, la
      propiedad imgSrc se actualizará automáticamente */
      imgSrc() {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      },
    },
  };
</script>

<style scoped>
  /* Pokemon Picture */
  .pokemon-container {
    height: 200px;
  }
  img {
    height: 200px;

    /* Disable drag and select */
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
</style>
