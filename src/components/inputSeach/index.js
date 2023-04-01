import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { ThemeContext } from "../../contexts/themeContext";
import { InputBox, InputBar } from "./inputSearch.styled";

export const InputSearch = () => {
  const { theme } = useContext(ThemeContext);
  const { pokemon, setPokemon } = useContext(PokemonContext);

  function choicePokemon(event) {
    event.preventDefault();
    setPokemon(event.target.value)
  }
//comentário
  useEffect(() => {
    
  },[])

  return (
    <InputBox>
      <InputBar theme={theme} type='text' name='search' placeholder="Search a Pokemon" onInput={choicePokemon}/>
      <button>Enviar</button>
    </InputBox>
  );
};
