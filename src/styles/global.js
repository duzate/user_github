import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root { 
    font-family: 'Roboto', sans-serif;
  }

  body, input, button, label{
    font-size: 12px;
    box-shadow: none;
    margin-bottom: 0;

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;
