import React from "react";
import * as S from "./styles";

const IconDataNFT = ({path, number, color}) => {
  return (
    <S.Content color={color}>
      <figure>
        <img src={path} alt=""/>
      </figure>  
      <span>{number}</span>
    </S.Content>
  );
};

export default IconDataNFT;