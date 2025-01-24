import { onMounted, ref } from "vue"
import { GameStatus } from "../interfaces"
import { PokemonApi } from "../api/pokemonApi";



export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>( GameStatus.Playing );

  const getPokemons = async () => {
    const pokemonApi = new PokemonApi();
    const response = await pokemonApi.get('/?limit=151');
    console.log(response.data);
  }

  onMounted(() => {
    getPokemons();
  });

  return {
    gameStatus,
  }
}


