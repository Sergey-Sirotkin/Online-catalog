import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import HomePage from "../components/homePage"

const IndexPage = () => {
  return (
    <Layout label="Електронний Каталог" isHomePage>
      <HomePage />
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
