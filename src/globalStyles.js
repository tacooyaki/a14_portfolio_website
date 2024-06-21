import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a1a1a; /* darker gray bg */
    color: #ddd; /* light text for contrast against bg */
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
