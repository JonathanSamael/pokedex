import axios from "axios";

export async function getPokemon() {
  const response = await axios(
    `https://pokeapi.co/api/v2/pokemon/?limit&offset=10`
  );
  const data = response.data.results;
  console.log(data);
}

