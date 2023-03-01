import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ButtonStyle } from "../button/button.styled";
import { ThemeContext } from "../contexts/themeContext";
import { Header } from "../header/header.styled";
import { ThemeToggleButton } from "../ThemeToggleButton/ToggleButton";
import {
  Container,
  PokemonContainer,
  PokemonImage,
  PokemonInfos,
  PokemonDescription,
  PokemonName,
  H3,
} from "./pokemonPage.styled";

export const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const { theme } = useContext(ThemeContext);
  let { id } = useParams();

  useEffect(() => {
    async function getPokemon() {
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(response.data);
    }
    getPokemon();
  }, []);

  return (
    <>
      <Header theme={theme}>
        <Link to={`/`}>
          <ButtonStyle theme={theme}>Back</ButtonStyle>
        </Link>
        <ThemeToggleButton>Theme</ThemeToggleButton>
      </Header>
      <Container>
        <PokemonContainer theme={theme}>
          <PokemonInfos theme={theme}>
            <PokemonImage src={pokemon.sprites?.other?.home?.front_default} />
            <PokemonDescription theme={theme}>
              <PokemonName theme={theme}>{pokemon.name}</PokemonName>
              <H3>Moves</H3>
              {pokemon?.moves?.slice(0, 4).map((moves, index) => {
                return <p key={index}>{moves.move.name}</p>;
              })}
              <H3>Abilities</H3>
              {pokemon?.abilities?.map((abilities, index) => {
                return <p key={index}>{abilities.ability.name}</p>;
              })}
              <H3>Type</H3>
              {pokemon?.types?.map((types, index) => {
                return <p key={index}>{types.type.name}</p>;
              })}
            </PokemonDescription>
          </PokemonInfos>
        </PokemonContainer>
      </Container>
    </>
  );
};
