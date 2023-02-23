import { createGlobalStyle } from "styled-components"


export const CSSReset = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: 'Rubik', sans-serif;
        background-color: #cde0bf;
    }

    a {
        text-decoration: none;
    }

`;