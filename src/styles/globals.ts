import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{margin: 0; padding: 0; }
    body{overflow:hidden; font-family: 'Open Sans', sans-serif}
    *, input, button{ background: none; border: none; box-sizing: border-box; }
    ul{ list-style: none; }
`;
