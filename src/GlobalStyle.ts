import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    a { 
        text-decoration: none;
        color: #000;
    }
`