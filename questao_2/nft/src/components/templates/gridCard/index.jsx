import React from "react";
import * as S from "./styles";

import Card from '../../organisms/Card';

const GridCard = () => {
  return (
    <S.Content>
      <h3>Latest live auctions</h3>
      <S.Grid>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </S.Grid>
    </S.Content>
  );
};

export default GridCard;