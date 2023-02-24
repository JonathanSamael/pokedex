import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    async function getPokemon() {
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(response.data);
    };
    getPokemon();
  }, []);

  return <div>{pokemon.name}</div>;
};
