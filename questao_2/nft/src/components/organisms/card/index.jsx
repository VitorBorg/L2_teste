import React from "react";
import * as S from "./styles";

import ButtonPurpleDark from '../../molecules/buttonPurpleDark/index';
import ButtonGray from '../../molecules/buttonGray/index';

import LogoIcon from '../../atoms/logoIcon';
import ClockIcon from '../../atoms/clockIcon/index';
import HeartIcon from '../../atoms/heartIcon/index';
import image from '../../../assets/nft_1.png';
import people_1 from '../../../assets/people_1.jpg';
import people_4 from '../../../assets/people_4.png';
import people_6 from '../../../assets/people_6.png';

const Card = () => {
  return (
    <>
    <S.Card>
      <S.Image>
          <img src={image} alt="nft image"/>
      </S.Image>

        <S.Info>
          <S.InfoContent>
            <h5>
            Vulputate felis purus viverra morbi facilisi eget
            </h5>
            <div>
              <ButtonPurpleDark text={"3.25 ETH"}/>
            </div>
          </S.InfoContent>

          <S.Timing>
            <ClockIcon />
            <span>2:41 min left</span>
          </S.Timing>
        </S.Info>

      <S.Line />

      <S.Data>
        <S.DataContent>
          <div>
            <S.ImageIcon>
              <img src={people_1} alt="nft image"/>
            </S.ImageIcon>

            <S.ImageIcon>
              <img src={people_4} alt="nft image"/>
            </S.ImageIcon>

            <S.ImageIcon>
              <img src={people_6} alt="nft image"/>
            </S.ImageIcon>

          </div>
          <span>35 people are bidding</span>  
        </S.DataContent>

        <S.DataContent>
          <HeartIcon />
          <span>120</span>
        </S.DataContent>
      </S.Data>

    </S.Card>
    </>
  );
};

export default Card;