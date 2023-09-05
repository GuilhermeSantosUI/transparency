import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  canvas {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
  }
`}`;
