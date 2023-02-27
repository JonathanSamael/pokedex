import styled from "styled-components";

export const PokedexContainer = styled.main`
  margin: 50px;
  background-color: #efefef;
  border: 1px solid #c8c8c8;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 800ms;
  `;

export const PokemonCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  font-size: 4.5rem;
  font-weight: 600;
  text-align: center;
  transition: all 800ms;
  `;

export const PokemonList = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 98, 72, 0.3);
  height: 250px;
  min-width: 200px;
  border-radius: 10px;
  transition: all 800ms;
`;

export const PokemonImages = styled.img`
  display: block;
  margin-bottom: 10px;
  width: 150px;
`;
