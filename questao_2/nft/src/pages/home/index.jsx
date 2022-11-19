import React from 'react';
import * as S from "./styles"

import GridCard from "../../components/templates/gridCard"
import TextImageSection from "../../components/organisms/textImageSection/index"
import IconsSection from '../../components/organisms/iconsSection/index';
import SimpleLine from '../../components/atoms/simpleLine';

//components
const Home = () => {
return (
  <>
  <GridCard />
  <TextImageSection />
  <SimpleLine />
  <IconsSection />
  </>
)
};

export default Home;