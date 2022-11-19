import React from "react";
import * as S from "./styles";

const IconDataSub = ({path, number, title}) => {
  return (
    <S.Content>
      <figure>
        <img src={path} alt=""/>
      </figure>  
      <h3>{number}</h3>
      <span>{title}</span>
    </S.Content>
  );
};

export default IconDataSub;