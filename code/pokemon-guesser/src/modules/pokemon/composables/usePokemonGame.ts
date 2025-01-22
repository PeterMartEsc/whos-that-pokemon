import { ref } from "vue"
import { GameStatus } from "../interfaces"



export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>( GameStatus.Playing );


  return {
    gameStatus,
  }
}


