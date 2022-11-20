import styled from "styled-components";

export const NavbarStyle = styled.nav`
/* position: fixed; */
top: 0;
left: 0;
width: auto;

display: flex;
justify-content: space-between;
align-items: center;
padding: 60px;

div{
  width: 33vw;
}

div:last-child{
  justify-content: flex-end;
}


@media (max-width: ${(props) => props.theme.screen.xl}) {
  display: none;
}

`;

export const MenuDivLinks = styled.div`
  
  display: flex;
  gap: 2.5EM;
  font-size: 14px;

  a {
    cursor: pointer;
  }
`

export const MenuDivButtons = styled.div`
  display: flex;
  gap: 16px;
`

export const MenuDivLogo = styled.div`
  
  display: flex;
  align-items: center;
  gap: 16px;
`