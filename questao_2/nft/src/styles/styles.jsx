import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.main};
}

body {
  width: 100vw;

  color: ${(props) => props.theme.colors.letter};
  overflow-x: hidden;

  background-color: ${(props) => props.theme.colors.background};
  font-size:  ${(props) => props.theme.fontSize.normal};
}

h1 {
    
    font-size:  ${(props) => props.theme.fontSize.display};
    line-height: 25.5px;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      font-size: ${(props) => props.theme.fontSize.displaySm};
    }

    @media (max-width: ${(props) => props.theme.screen.xl}) {
      font-size: ${(props) => props.theme.fontSize.displayMd};
    }
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

    @media (max-width: ${(props) => props.theme.screen.md}) {
      font-size: ${(props) => props.theme.fontSize.normal};
    }
  }

::-webkit-scrollbar{
    width: 3px;
    
  }
  ::-webkit-scrollbar-track{
    background: none;
  }
  ::-webkit-scrollbar-thumb{
    background-image: linear-gradient(${(props) =>
      props.theme.colors.Purple}, ${(props) => props.theme.colors.dark});
    border-radius: 25px;
  }

`

export default GlobalStyle;