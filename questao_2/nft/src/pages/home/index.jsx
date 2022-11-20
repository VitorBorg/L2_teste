import React from 'react';
import * as S from "./styles"

import GridCard from "../../components/templates/gridCard"
import HomeLauncher from '../../components/organisms/homeLauncher';
import DataSection from '../../components/templates/dataSection/index'

//components
const Home = () => {
return (
  <>
  <HomeLauncher />
  <GridCard />
  <DataSection />
  </>
)
};

export default Home;