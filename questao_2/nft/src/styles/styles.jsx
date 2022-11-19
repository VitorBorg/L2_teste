import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100vw;

  font-family: ${(props) => props.theme.fonts.main};
  line-height: 100%;
  letter-spacing: 0.2px;

  h1 {
    
    font-size:  ${(props) => props.theme.fontSize.display};
    line-height: 25.5px;
  }

  h2 {
    font-size:  ${(props) => props.theme.fontSize.headline2};
  }

  h3 {
    font-size:  ${(props) => props.theme.fontSize.headline4};
    line-height: 25.5px;
  }

  h5 {
    font-size:  ${(props) => props.theme.fontSize.headline6};
    line-height: 25.5px;
  }

  h6 {
    font-size: ${(props) => props.theme.fontSize.headline7};
    color: ${(props) =>props.theme.colors.PurpleLight};
    white-space:nowrap;
  }

  span {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSize.normal};
    font-weight: 100;
  }
}

body {
  color: ${(props) => props.theme.colors.letter};
  overflow-x: hidden;
  max-width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  font-size:  ${(props) => props.theme.fontSize.normal};
}

`

export default GlobalStyle;