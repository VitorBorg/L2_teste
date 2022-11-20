import { useState } from 'react'


import Home from "./pages/home/index"
import HeaderPage from "./components/organisms/header/index"
import FooterPage from "./components/organisms/footer/index"
import HeaderMobile from "./components/organisms/headerMobile/index"

import Theme from "./styles/theme"

function App() {
  return (
    <>
      <Theme>
        <HeaderPage />
        <HeaderMobile />
        <Home />
        <FooterPage />
      </Theme>
    </>
  )
}

export default App
