import React from "react";

import ButtonBaseSimple from '../../atoms/buttonBaseSimple/index';

const ButtonPurpleDark = ({text, onClick}) => {
  return (
    <ButtonBaseSimple
    background={(props) => props.theme.colors.PurpleDark}
    color={(props) => props.theme.colors.PurpleLight}
    opacity={"1"} 
    border={"none"} 
    onClick={onClick}
    text={text}
    />
  );
};

export default ButtonPurpleDark;