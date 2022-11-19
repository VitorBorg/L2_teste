import React from "react";

import ButtonBase01 from '../../atoms/buttonBase01';

const ButtonPurple = ({text, onClick}) => {
  return (
    <ButtonBase01 
    background={"linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)"} 
    color={(props) => props.theme.colors.letter}
    opacity={"1"} 
    border={"none"} 
    onClick={onClick}
    text={text}
    />
  );
};

export default ButtonPurple;