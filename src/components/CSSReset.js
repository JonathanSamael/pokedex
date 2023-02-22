import { createGlobalStyle } from "styled-components"


export const CSSReset = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        height: 100vh;
        font-family: 'Rubik', sans-serif;
        background-color: #CDE0BF;
    }

    a {
        text-decoration: none;
    }

`;