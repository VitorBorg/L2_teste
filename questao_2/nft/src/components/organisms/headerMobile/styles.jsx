import styled from "styled-components";

export const NavbarStyle = styled.header`
position: fixed;
top: 0;
left: 0;
height: 6rem;
width: 90%;
max-width: 100%;

padding: 2rem;

display: flex;
justify-content: space-between;
align-items: center;
z-index: 10;
display: none;

  @media (max-width: ${(props) => props.theme.screen.xl}) {
    display: flex;
    background: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(2px);
    box-shadow: 0 10px 30px -10px rgba(10, 25, 47, 0.85);
  }
`;

export const MenuDivLogo = styled.div`
  
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ButtonMobile = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0;
  outline: inherit;
  z-index: 15;
  @media (max-width: ${(props) => props.theme.screen.xl}) {
    display: block;
  }
  :hover {
    transform: scale(1.2, 1.2);
  }
`;

export const ButtonMobileClose = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0;
  outline: inherit;
  z-index: 15;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.screen.xl}) {
    display: block;
  }
  :hover {
    transform: scale(1.2, 1.2);
  }
`;

export const MenuAside = styled.aside`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: min(75vw, 400px);
  z-index: 10;
  background-color: #112240;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 50px 10px 30px -10px rgba(10, 25, 47, 0.85);
`;


export const MenuDivLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5EM;
  font-size: 14px;

  a {
    cursor: pointer;
  }
`

export const MenuDivButtons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 16px;
`