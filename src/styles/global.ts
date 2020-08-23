import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;

    }

    body {
      font-family: 'Roboto', sans-serif;
      color: #fff;
      -webkit-font-smoothing: antialiased;
    }

      input, button {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;

    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }



`;
