import { createGlobalStyle } from "styled-components"; 

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Instrument Sans, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  body {
    background-color: #DBE6F4;

    @media (max-width: 200px) {
    background-color: #f4f4f4;
    }

    @media (max-height: 1000px) and (max-width: 700px) {
    background-color: #f4f4f4;
    }

    padding: 24px;
    width: 100%;
  }
  }
`;

export default GlobalStyles;
