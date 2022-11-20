import React from "react";
import * as S from "./styles";

import { useState } from "react";


import ButtonPurple from '../../molecules/buttonPurple/index';
import ButtonGray from '../../molecules/buttonGray/index';
import LogoName from '../../atoms/logoName/index';

import MenuIcon from "../../atoms/menuIcon/index";
import MenuCloseIcon from "../../atoms/menuCloseIcon/index";

const HeaderMobile = () => {
  const [menu, setMenu] = useState(false);

  const handleButtonClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <S.NavbarStyle>
        <S.MenuDivLogo>
          <LogoName />
        </S.MenuDivLogo>

        <S.ButtonMobile onClick={handleButtonClick} style={{ cursor: "pointer" }}>
          <MenuIcon />
        </S.ButtonMobile>
      </S.NavbarStyle>





      {menu && (
        <S.MenuAside>
          <S.ButtonMobileClose onClick={handleButtonClick}>
            <MenuCloseIcon />
          </S.ButtonMobileClose>

          <S.MenuDivLinks>
            <a>Auctions</a>
            <a>Roadmap</a>
            <a>Discover</a>
            <a>Community</a>
        </S.MenuDivLinks>

        <S.MenuDivButtons>
          <ButtonGray text="Contact" />
          <ButtonPurple text="My account"/>
        </S.MenuDivButtons>

        </S.MenuAside>
      )}

    </>
  );
};

export default HeaderMobile;