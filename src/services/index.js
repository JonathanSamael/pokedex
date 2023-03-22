import axios from "axios";

export async function getPokemon(paginationOffset) {
    const response = await axios(
      `https://pokeapi.co/api/v2/pokemon/?limit=${paginationOffset}&offset=0`
    );
      return response.data.results
}

