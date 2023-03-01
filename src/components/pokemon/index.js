import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  PokedexContainer,
  PokemonCard,
  PokemonImages,
  PokemonList,
} from "./pokeList.styled";
import { HomeHeader } from "../header/header.styled";
import { ButtonStyle } from "../button/button.styled";
import { ThemeContext, themes } from "../contexts/themeContext";
import { ThemeToggleButton } from "../ThemeToggleButton/ToggleButton";

export function ShowPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [showMore, setShowMore] = useState(10);
  const { theme } = useContext(ThemeContext);

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
    <>
      <HomeHeader theme={theme}>
        <ThemeToggleButton theme={theme}>{`Theme ${
          theme === themes.light ? "☀️" : "🌒"
        }`}</ThemeToggleButton>
      </HomeHeader>
      <PokedexContainer theme={theme}>
        <PokemonCard>
          {pokemon.map((pokemon, index) => (
            <PokemonList key={index} theme={theme}>
              <Link to={`/pokemon/${++index}`}>
                <PokemonImages
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index}.png`}
                  alt={pokemon.name}
                />
                {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
              </Link>
            </PokemonList>
          ))}
        </PokemonCard>
        <ButtonStyle theme={theme} onClick={() => getPokemon()}>Load more</ButtonStyle>
      </PokedexContainer>
    </>
  );
}
