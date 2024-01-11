<template>
  <h1 v-if="!pokemon">Espera un poco por favor...</h1>

  <div v-else>
    <h1>¿Quién es este pokémon?</h1>

    <!-- Los atributos se podrían colocar :pokemon-id y :show-pokemon y funcionaría igual -->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <button @click="refresh" v-if="showButton">Jugar de nuevo</button>

    <template v-if="showPokemon">
      <h2>{{ pokemon.name }}</h2>
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    </template>
  </div>
  <!-- TODO: Opciones -->
</template>

<script>
  import PokemonPicture from "@/components/PokemonPicture.vue";
  import PokemonOptions from "@/components/PokemonOptions.vue";
  import getPokemonOptions from "@/helpers/getPokemonOptions.js";
  import Swal from "sweetalert2";
  import capitalize from "@/helpers/capitalize.js";

  export default {
    name: "PokemonPage",
    components: {
      PokemonPicture,
      PokemonOptions,
    },
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showButton: false,
      };
    },
    methods: {
      async mixPokemonsArray() {
        this.pokemonArr = await getPokemonOptions();
        this.pokemon = this.pokemonArr[Math.floor(Math.random() * 4)];
      },
      checkAnswer(pokemonId) {
        if (this.pokemon.id === pokemonId) {
          Swal.fire("¡Correcto!", "¡Has acertado!", "success");
        } else {
          Swal.fire(
            "¡Incorrecto!",
            `Has fallado el pokemon era ${capitalize(this.pokemon.name)}`,
            "error"
          );
        }
        this.showPokemon = true;
        this.showButton = true;
      },
      refresh() {
        this.showPokemon = false;
        this.showButton = false;
        this.pokemon = null;
        this.pokemonArr = [];
        this.mixPokemonsArray();
      },
    },
    mounted() {
      this.mixPokemonsArray();
    },
  };
</script>

<style></style>
