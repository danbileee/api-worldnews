import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    user-select: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  a {
    color: black;
    text-decoration: none;
  }
  button {
    cursor: pointer;
    background: none;
    padding: 0;
    border: none;
    outline: none;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  select {
    appearance: none;
    outline: none;
  }
  select::-ms-expand {
    display: none;
  }
  input:focus {
    outline: none;
  }
  textarea {
    box-shadow: none;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
`;
