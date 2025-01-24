import axios from "axios"
import type { PokemonListResponse } from "../interfaces";

export class PokemonApi {
  uri = 'https://pokeapi.co/api/v2/pokemon';
  async get(limit:string) {

    const response = await axios.get(this.uri+limit);

    return response.data as PokemonListResponse;
  }
}
