import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getPokemon } from "../../services";
import {
  PokedexContainer,
  PokemonCard,
  PokemonImages,
  PokemonList,
} from "./pokeList.styled";
import { Header, PokemonLogo } from "../header/header.styled";
import { ButtonStyle } from "../button/button.styled";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { ThemeToggleButton } from "../ThemeToggleButton/ToggleButton";
import { PokemonContext } from "../../contexts/pokemonContext";
import { InputSearch } from "../inputSeach";
import pokemonLogo from "../../assets/pokemon-logo.png";

export function ShowPokemon() {
  const pageInitialLimit = 10;

  const [paginationOffset, setPaginationOffset] = useState(10);
  const { pokemon, setPokemon } = useContext(PokemonContext);
  const { theme } = useContext(ThemeContext);

  const pocketMons = Array.from(pokemon);

  const addPokemon = () => {
    setPaginationOffset(paginationOffset + pageInitialLimit);
  };
  
  const fetchData = async () => {
    const data = await getPokemon(paginationOffset);
    setPokemon(data)
    addPokemon();
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header theme={theme}>
        <PokemonLogo theme={theme} src={pokemonLogo}></PokemonLogo>
        <InputSearch/>
        <ThemeToggleButton theme={theme}>{`Theme ${
          theme === themes.light ? "☀️" : "🌒"
        }`}</ThemeToggleButton>
      </Header>
      <PokedexContainer theme={theme}>
        <PokemonCard>
          {pocketMons.map((pokemon, index) => (
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
        <ButtonStyle theme={theme} onClick={() => fetchData()}>
          Load more
        </ButtonStyle>
      </PokedexContainer>
    </>
  );
}
