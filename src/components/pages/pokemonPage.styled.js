import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonContainer = styled.section`
  background-color: #efefef;
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
  background-color: rgba(0, 98, 72, 0.3);
  border-radius: 10px;
  font-size: 3rem;
  padding: 10px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PokemonImage = styled.img`
  /* width: 300px; */
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
