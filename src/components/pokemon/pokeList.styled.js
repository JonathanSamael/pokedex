import styled from "styled-components";

export const PokedexContainer = styled.main`
  margin: 50px;
  background-color: ${({ theme }) => theme.backgroundContainer};
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
  background-color: ${({ theme }) => theme.card};
  height: 220px;
  min-width: 200px;
  border: 1px solid #c8c8c8;
  border-radius: 10px;
  transition: all 800ms;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
    transition: all 800ms;
  }
`;

export const PokemonImages = styled.img`
  display: block;
  margin-bottom: 10px;
  width: 150px;
`;
