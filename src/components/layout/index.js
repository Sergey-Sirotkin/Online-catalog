import React from "react"
import Header from "../header"
import Footer from "../footer"

import { Main, Wrapper } from "./styled"

import "../../styles/reset.css"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </Wrapper>
  )
}

export default Layout
