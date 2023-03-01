import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ButtonStyle } from "../button/button.styled";
import { Header } from "../header/header.styled";
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
      <Header>
        <Link to={`/`}>
          <ButtonStyle>Back</ButtonStyle>
        </Link>
        <ButtonStyle>Theme</ButtonStyle>
      </Header>
      <Container>
        <PokemonContainer>
          <PokemonInfos>
            <PokemonImage src={pokemon.sprites?.other?.home?.front_default} />
            <PokemonDescription>
              <PokemonName>{pokemon.name}</PokemonName>
              <H3>Moves</H3>
              {pokemon?.moves?.slice(0, 4).map((moves, index) => {
                return <p key={index}>{moves.move.name}</p>;
              })}
              <H3>Abilities</H3>
              {pokemon?.abilities?.slice(0, 4).map((abilities, index) => {
                return <p key={index}>{abilities.ability.name}</p>;
              })}
              <H3>Type</H3>
              {pokemon?.types?.slice(0, 4).map((types, index) => {
                return <p key={index}>{types.type.name}</p>;
              })}
            </PokemonDescription>
          </PokemonInfos>
        </PokemonContainer>
      </Container>
    </>
  );
};
