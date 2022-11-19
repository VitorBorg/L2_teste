import React from "react";

import ButtonBase01 from '../../atoms/buttonBase01';

const ButtonGray = ({text, onClick}) => {
  return (
    <ButtonBase01 
    background={"rgba(0,0,0,100)"} 
    color={(props) => props.theme.colors.letter}
    opacity={"0.5"} 
    border={"2px solid #7780A1"} 
    onClick={onClick}
    text={text}
    />
  );
};

export default ButtonGray;