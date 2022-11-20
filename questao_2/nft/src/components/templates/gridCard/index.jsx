import React from "react";
import * as S from "./styles";

import Card from '../../organisms/Card';


const nftCards = [
  {
    id: 1,
    image: '/nftCard_1.png',
  },
  {
    id: 2,
    image: '/nftCard_2.png',
  },
  {
    id: 3,
    image: '/nftCard_3.png',
  },
  {
    id: 4,
    image: '/nftCard_2.png',
  },
  {
    id: 5,
    image: '/nftCard_1.png',
  },
  {
    id: 6,
    image: '/nftCard_3.png',
  }
];


const GridCard = () => {
  return (
    <S.Content>
      <h3>Latest live auctions</h3>
      <S.Grid>
        {nftCards.map(card => (
            <li>
              <Card image={card.image}/>
            </li>
        ))}
      </S.Grid>
      <S.ButtonHorizontal>></S.ButtonHorizontal>
    </S.Content>
  );
};

export default GridCard;