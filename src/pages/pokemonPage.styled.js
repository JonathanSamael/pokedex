import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundContainer};
  border: 1px solid #c8c8c8;
  border-radius: 6px;
  padding: 20px;
  margin: 20px;
  transition: all 800ms;

  @media (max-width: 1024px) {
    width: 700px;
  }
`;

export const PokemonInfos = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid #c8c8c8;
  font-size: 3rem;
  color: ${({ theme }) => theme.color};
  transition: all 800ms;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PokemonImage = styled.img`
  width: 50%;
  margin: 15px;
`;

export const PokemonName = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  text-transform: capitalize;
`;

export const PokemonDescription = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  font-size: 3rem;
`;

export const H3 = styled.h3`
  margin-top: 10px;
`;
