import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { getPokemon } from "../../services";
import {
  PokedexContainer,
  PokemonCard,
  PokemonImages,
  PokemonList,
} from "./pokeList.styled";
import { HomeHeader } from "../header/header.styled";
import { ButtonStyle } from "../button/button.styled";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { ThemeToggleButton } from "../ThemeToggleButton/ToggleButton";
import axios from "axios";

export function ShowPokemon() {
  const pageInitialLimit = 10;

  const [pokemon, setPokemon] = useState([]);
  const [showMore, setShowMore] = useState(10);
  const { theme } = useContext(ThemeContext);

  const addPokemon = () => {
    setShowMore(showMore + pageInitialLimit)
  }

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    const response = await axios(
      `https://pokeapi.co/api/v2/pokemon/?limit=${showMore}`
    );
    const data = response.data.results;
    console.log(response);
    setPokemon(data);
    addPokemon()
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
        <ButtonStyle theme={theme} onClick={() => getPokemon()}>
          Load more
        </ButtonStyle>
      </PokedexContainer>
    </>
  );
}
