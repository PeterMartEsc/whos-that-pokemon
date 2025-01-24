import axios from "axios"

export class PokemonApi {
  uri = 'https://pokeapi.co/api/v2/pokemon';
  async get(limit:string) {
    const response = await axios.get(this.uri+limit);
    return response;
  }
}
