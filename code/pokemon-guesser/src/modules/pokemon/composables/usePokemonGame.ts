import { onMounted, ref } from "vue"
import { GameStatus, type PokemonListResponse } from "@/modules/pokemon/interfaces"
import { PokemonApi } from "@/modules/pokemon/api/pokemonApi";

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>( GameStatus.Playing );

  const getPokemons = async () => {
    const pokemonApi = new PokemonApi();
    const response = await pokemonApi.get('/?limit=151');
    console.log(response.results);
  }

  onMounted(() => {
    getPokemons();
  });

  return {
    gameStatus,
  }
}
