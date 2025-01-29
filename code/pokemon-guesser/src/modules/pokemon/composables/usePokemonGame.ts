import { computed, onMounted, ref } from "vue"
import { GameStatus, type PokemonListResponse, type Pokemon} from "@/modules/pokemon/interfaces"
import { PokemonApi } from "@/modules/pokemon/api/pokemonApi";

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>( GameStatus.Playing );
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  const isLoading = computed(()=> pokemons.value.length == 0);

  const getPokemons = async () : Promise<Pokemon[]> => {
    const pokemonApi = new PokemonApi();
    const response = await pokemonApi.get('/?limit=151');

    const pokemonsArray = response.results.map(pokemon => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2] ?? 0;
      return {
        id: +id,
        name: pokemon.name,
      }
    });

    //Devuelve 0 o 1, al restarlo por 0.5, puede salir un numero negativo o positivo.
    const pokemonsUnsorted = pokemonsArray.sort(() => Math.random() - 0.5)

    return pokemonsUnsorted;
  }

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  }

  onMounted(async () => {
    //setTimeout(async () => {
    pokemons.value = await getPokemons();
    //}, 1000);
    //console.log(pokemons);
    getNextOptions();
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,

    //Methods
    getNextOptions,
  }
}
