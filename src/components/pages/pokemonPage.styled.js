import styled from "styled-components";

export const Header = styled.section`
  padding: 0 10px;
`;

export const PokemonInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: rgba(0, 98, 72, 0.3);
  width: 100%;
  border-radius: 10px;
  font-size: 3rem;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PokemonImage = styled.img`
  width: 300px;
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
  margin: 15px;
  font-size: 2.5rem;
`;

export const H3 = styled.h3`
  margin-top: 10px;
`

