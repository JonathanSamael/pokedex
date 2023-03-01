import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 20px;
  padding: 10px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 3px solid ${({ theme }) => theme.card};
  border-radius: 10px;
  cursor: pointer;
  width: 130px;
  transition: all 800ms;
`;