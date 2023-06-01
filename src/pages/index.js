import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import HomePage from "../components/homePage"

const IndexPage = ({ data }) => {
  return (
    <Layout label="Електронні Каталоги" isHomePage>
      <HomePage data={data} />
    </Layout>
  )
}

export const Head = () => <Seo />

export const query = graphql`
  query {
    home: mdx(frontmatter: { mdxID: { eq: "homePage" } }) {
      frontmatter {
        catalogues {
          label
          description
          link
          porulonkaLink
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default IndexPage
