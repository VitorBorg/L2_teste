import React from "react";
import * as S from "./styles";

const ButtonBase01 = ({
  background,
  color, 
  opacity, 
  border, 
  text, 
  onClick}) => {
  return (
    <S.Button 
    background={background}
    color={color} 
    opacity={opacity} 
    border={border} 
    onClick={onClick}>
      <span>{text}</span>
    </S.Button>
  );
};

export default ButtonBase01;