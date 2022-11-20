import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  z-index: -1;

  * {
    animation: rotate 2s infinite alternate;

  }

  @keyframes rotate {
    0% {
      translate: 2px 5px;
    }
    100% {
      translate: -2px -5px;
    }
  }
  

  figure {
    display: flex;
    
    img {
      z-index: -1;
      border-radius: 20px;
      box-shadow: 0px 0px 50px ${(props) => props.color};
      filter: blur(.4px);
    }
  }

  span {
    opacity: .7;
    z-index: -2;
  }
`;