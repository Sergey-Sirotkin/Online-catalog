import React from "react"
import { graphql } from "gatsby"
import GroupGrid from "../components/groupGridPorulonka"

import Seo from "../components/seo"
import Layout from "../components/layout"

const PorulonkaPage = ({ data }) => {
  const { groupName, productCards, groupTitle } = data.ecoline.frontmatter

  return (
    <Layout label="Порулонка - Слобожанские" isEcoLine="true">
      <GroupGrid
        productCards={productCards}
        groupTitle={groupTitle}
        groupName={groupName}
      />
    </Layout>
  )
}

export const Head = () => <Seo />

export const query = graphql`
  query {
    ecoline: mdx(frontmatter: { groupName: { eq: "porulonka" } }) {
      frontmatter {
        groupName
        groupTitle
        productCards {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          itemNumber
          features {
            companion {
              companionItem
            }
          }
        }
      }
    }
  }
`

export default PorulonkaPage
