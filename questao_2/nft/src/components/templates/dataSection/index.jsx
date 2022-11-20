import React from 'react';
import * as S from "./styles"

import TextImageSection from "../../organisms/textImageSection/index"
import IconsSection from '../../organisms/iconsSection/index';
import SimpleLine from '../../atoms/simpleLine';

//components
const DataSection = () => {
return (
  <S.Container>
    <TextImageSection />
    <SimpleLine />
    <IconsSection />
  </S.Container>
)
};

export default DataSection;