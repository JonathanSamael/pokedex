import styled from "styled-components";

export const Header = styled.header`
  padding: 0 10px 10px;
  background-color: ${({ theme }) => theme.backgroundContainer};
  border: 1px solid #c8c8c8;
  display: flex;
  justify-content: space-between;
  transition: all 800ms;
`;

export const HomeHeader = styled.header`
  background-color: ${({ theme }) => theme.backgroundContainer};
  padding: 0 10px 10px;
  border: 1px solid #c8c8c8;
  display: flex;
  justify-content: end;
  transition: all 800ms;
`;
