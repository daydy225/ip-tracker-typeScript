import {createGlobalStyle} from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Rubik', sans-serif;
        background-color: #fff;
        color: hsl(0, 0%, 17%);
        font-size: 1.125 em;
    }

    span {
        color: hsl(0, 0%, 52%);
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`

export default GlobalStyle;