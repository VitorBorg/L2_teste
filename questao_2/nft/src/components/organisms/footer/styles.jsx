import styled from "styled-components";

export const FooterStyle = styled.footer`
display: flex;
flex-direction: row;
margin: 10rem 20% 5rem 20%;
justify-content: center;
align-items: center;
height: 400px;

margin-top: 20rem;

section:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

section:nth-child(3) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

@media (max-width: ${(props) => props.theme.screen.lg}) {
    height: auto;
    flex-direction: column;
  }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  max-width: 600px;
  width: 100%;
  min-height: 100%;

  border: 1px solid ${(props) => props.theme.colors.dark};
  box-shadow: 0px 0px 5px ${(props) => props.theme.colors.dark};

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    div {
      padding-bottom: 30px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  a:hover{
    cursor: pointer;
    svg:hover path {
      fill: ${(props) => props.theme.colors.letter};
    }
  }


`;

export const MenuDivLinks = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.headline7};

  a {
    cursor: pointer;
  }
`

export const MenuDivLinksUseful = styled.div`
  
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.normal};
  font-weight: 400;
  color: ${(props) => props.theme.colors.medium} !important;

  a {
    white-space: nowrap;
    cursor: pointer;
  }
`

export const Contact = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 40px;
`


export const PlaceHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.letter};
  color: ${(props) => props.theme.colors.medium};
  padding: 18px 20px;
  border-radius: 20px;
  gap: 40px;

  input {
    border: 0;
    white-space: nowrap;
  }

  input:focus{
    outline: none;
  }

  a {
    color: ${(props) => props.theme.colors.Purple};
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
  }
`