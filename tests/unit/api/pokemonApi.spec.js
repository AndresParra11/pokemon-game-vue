import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi", () => {
  test("Axios debe estar configurado con el API de pokemon", () => {
    // Se realiza la prueba de que la URL base sea la correcta.
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
