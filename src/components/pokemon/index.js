import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PokedexContainer, PokemonCard, PokemonImages, PokemonList } from "./pokeList.styled";
import { Button } from "../button/button";

export function ShowPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [showMore, setShowMore] = useState(10);

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    const response = await axios(
      `https://pokeapi.co/api/v2/pokemon/?limit=${showMore}`
    );
    const data = response.data.results;
    setPokemon(data);
    setShowMore(showMore + 10);
  }

  return (
    <PokedexContainer>
      <PokemonCard>
        {pokemon.map((pokemon, index) => (
            <PokemonList key={index}>
              <PokemonImages
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${++index}.png`}
                alt={pokemon.name}
              />
              <Link to={`/pokemon/${index}`}>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</Link>
            </PokemonList>
          ))}
      </PokemonCard>
      <Button onClick={() => getPokemon()}>Load more</Button>
    </PokedexContainer>
  );
}

