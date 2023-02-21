import styled, { createGlobalStyle } from "styled-components"

export const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
    height: 100vh;
    background: linear-gradient( #202020c7, #e2e2e2eb) no-repeat;
    }
`
export const PokedexContainer = styled.main`
    margin: 50px;
    background-color: #e2e2e2;
    border-radius: 6px;
    padding: 15px;
`;

export const PokemonCard = styled.div`
    display: flex;
    gap: 20px;
    font-size: 1.2rem;
`
export const PokemonList = styled.div`
    display: flex;
`;