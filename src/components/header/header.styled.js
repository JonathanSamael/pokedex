import styled from "styled-components";

export const Header = styled.header`
  padding: 0 10px 10px;
  background-color: ${({ theme }) => theme.backgroundContainer};
  border: 1px solid #c8c8c8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 800ms;
`;

export const PokemonLogo = styled.img`
  height: 80px;
`;
