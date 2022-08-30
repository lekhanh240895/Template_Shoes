import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;

    @media (max-width: 740px) {
    & {
        font-size: 55%;
    }
  }
}



body {
    background-color: #e2e2e4;
    font-family: monospace;
    line-height: 1.5;
}

ul {
    list-style: none;
}
`;

export default GlobalStyles;
