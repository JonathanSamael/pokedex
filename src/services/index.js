import axios from "axios";

export async function getPokemon(setPokemon) {
    const response = await axios(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`
    );
    const data = response.data.results;
    setPokemon(data)
}

