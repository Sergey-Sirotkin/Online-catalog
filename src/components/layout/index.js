import React from "react"
import Header from "../header"
import Footer from "../footer"

import { Main, Wrapper } from "./styled"

import "../../styles/reset.css"

const Layout = ({ children, label, isHomePage = false, isEcoLine, isSlob, noHomeBtn }) => {
  return (
    <Wrapper>
      <Header label={label} isHomePage={isHomePage} isEcoLine={isEcoLine} isSlob={isSlob} noHomeBtn={noHomeBtn} />

      <Main>{children}</Main>

      {!noHomeBtn && <Footer />}
    </Wrapper>
  )
}

export default Layout
