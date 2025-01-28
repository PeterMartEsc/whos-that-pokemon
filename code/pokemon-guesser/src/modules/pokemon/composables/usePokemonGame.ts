import { computed, onMounted, ref } from "vue"
import { GameStatus, type PokemonListResponse, type Pokemon} from "@/modules/pokemon/interfaces"
import { PokemonApi } from "@/modules/pokemon/api/pokemonApi";

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>( GameStatus.Playing );
  const pokemons = ref<Pokemon[]>([]);

  const isLoading = computed(()=> pokemons.value.length == 0);

  const getPokemons = async () : Promise<Pokemon[]> => {
    const pokemonApi = new PokemonApi();
    const response = await pokemonApi.get('/?limit=151');
    //console.log(response.results);
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

  onMounted(async () => {
    pokemons.value = await getPokemons();
    //console.log(pokemons);
  });

  return {
    gameStatus,
    isLoading,
  }
}
