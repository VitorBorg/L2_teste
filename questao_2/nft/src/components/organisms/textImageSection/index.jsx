import React from "react";
import * as S from "./styles";

import ButtonPurple from '../../molecules/buttonPurple/index';
import ButtonGray from '../../molecules/buttonGray/index';

import image from "../../../assets/tinta_grafico.png"

const TextImageSection = () => {
  return (
    <S.Content>
      <S.TextInfo>
        <div>
          <span>Overline</span>
          <h2>Sapien ipsum scelerisque convallis fusce</h2>
          <S.SpanSub>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</S.SpanSub>
        </div>

        <S.DivButtons>
          <ButtonPurple text={"Get Started"}/>
          <ButtonGray text={"Learn More"}/>
        </S.DivButtons>

      </S.TextInfo>

      <div>
          <S.figure>
            <img src={image} alt="tinta e grafico"/>
          </S.figure>
      </div>
    </S.Content>
  );
};

export default TextImageSection;