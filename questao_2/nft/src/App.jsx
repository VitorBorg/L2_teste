import { useState } from 'react'


import Home from "./pages/home/index"
import HeaderPage from "./components/organisms/header/index"
import FooterPage from "./components/organisms/footer/index"

import Theme from "./styles/theme"

function App() {
  return (
    <>
      <Theme>
        <HeaderPage />
        <Home />
        <FooterPage />
      </Theme>
    </>
  )
}

export default App
