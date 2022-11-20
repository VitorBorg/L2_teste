import styled from "styled-components";

export const Content = styled.section`
/* position: fixed; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 90vh;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
      margin-top: 200px;
  }
`;

export const BackgroundBlur = styled.div`
position: absolute;
top: 30vh;
left: 40vw;

div:nth-child(1) {
  z-index: -2;
  position: absolute;
  top: -5vh;
  left: 0vw;
  background-color: ${(props) => props.theme.colors.PurpleDark};
  filter: blur(125px);
  width: 300px;
  height: 300px;
}

div:nth-child(2) {
  z-index: -2;
  position: absolute;
  top: 10vh;
  left: -17vw;
  background-color: ${(props) => props.theme.colors.PinkTransparency};
  filter: blur(125px);
  width: 300px;
  height: 300px;

  opacity: .3;
}

div:nth-child(3) {
  z-index: -2;
  position: absolute;
  top: 25vh;
  right: -45vw;
  background-color: ${(props) => props.theme.colors.dark};
  filter: blur(125px);
  width: 300px;
  height: 300px;

  opacity: .8;
}

`;

export const Circles = styled.div`
  z-index: -5;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 3px solid ${(props) => props.theme.colors.dark};
  border-radius: 50%;

  filter: blur(2px);
  opacity: .5;
`;


export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  div:first-child {
    span {
      font-size: ${(props) => props.theme.fontSize.medium};
      letter-spacing: 3px;
    }
  }

  div:last-child {
    
    span {
      font-size: ${(props) => props.theme.fontSize.headline5};
    }
  }

  div{
    height: auto;

    span {
      color: ${(props) => props.theme.colors.medium};
      font-weight: 400;
    }
  }
`;

export const Title1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;
  margin-right: 8rem;

  div {
    img {
      margin-left: 1rem;
      width: 3rem;

      @media (max-width: ${(props) => props.theme.screen.md}) {
        width: 1.5rem;
      }
    }
  }
`;

export const Title2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;
  margin-left: 8rem;

  div {
    display: flex;
    align-items: center;
    img {
      padding-right: 1rem;
      width: 3rem;

      @media (max-width: ${(props) => props.theme.screen.md}) {
        width: 1.5rem;
      }
    }
  }
`;

export const Marcas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  margin-top: 30vh;
`;

export const NFT = styled.div`
position: absolute;

div:nth-child(1) {
  position: absolute;
  bottom: -300px;
  left: -1000px;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    bottom: -200px;
    left: -600px;
  }
}

div:nth-child(2) {
  position: absolute;
  top: -200px;
  left: -800px;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    top: -130px;
    left: -370px;
  }
}

div:nth-child(3) {
  position: absolute;
  bottom: -150px;
  left: -600px;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    top: 70px;
    left: -200px;
  }
}

div:nth-child(4) {
  position: absolute;
  bottom: -250px;
  right: -600px;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    top: 70px;
    left: -200px;
  }
}

div:nth-child(5) {
  position: absolute;
  top: -150px;
  right: -850px;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    top: -300px;
    left: 60px;
  }
}

div:nth-child(6) {
  position: absolute;
  top: -400px;
  right: -750px;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    top: -70px;
    left: -100px;
  }
}
`;