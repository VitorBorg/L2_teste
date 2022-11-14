import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Sora', sans-serif;
  line-height: 100%;
  letter-spacing: 0.2px;
  color: #FFFFFF;
}

body {
  max-width: 100vw;
  background-color: #060714;
}

`

export default GlobalStyle;