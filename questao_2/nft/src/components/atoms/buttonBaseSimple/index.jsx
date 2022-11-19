import React from "react";
import * as S from "./styles";

const ButtonBaseSimple = ({
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
      <h6>{text}</h6>
    </S.Button>
  );
};

export default ButtonBaseSimple;