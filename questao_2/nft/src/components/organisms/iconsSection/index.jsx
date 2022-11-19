import React from "react";
import * as S from "./styles";

import IconDataSub from '../../molecules/iconDataSub/index';

const IconsSection = () => {
  return (
    <S.Content>
      <IconDataSub path='/userIcon.png' title="Users Active" number="300k"/>
      <IconDataSub path='/artIcon.png' title="Artworks" number="52,5k"/>
      <IconDataSub path='/artistIcon.png' title="Artists" number="17,5k"/>
      <IconDataSub path='/walletIcon.png' title="Eth Spent" number="35.58"/>
    </S.Content>
  );
};

export default IconsSection;