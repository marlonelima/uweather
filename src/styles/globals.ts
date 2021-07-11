import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0; padding: 0; 
    }
    
    html, body {
        overflow-x: hidden;
    }

    body{
        overflow:hidden; 
        font-family: 'Open Sans', sans-serif;
        position: relative;
    }
    
    *, input, button{ 
        background: none; 
        border: none; 
        box-sizing: border-box; 
    }

    ul{ 
        list-style: none; 
    }
`;
