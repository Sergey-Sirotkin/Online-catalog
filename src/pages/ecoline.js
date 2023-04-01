import React from "react"
import { graphql } from "gatsby"
import GroupGrid from "../components/groupGrid"

import Seo from "../components/seo"
import Layout from "../components/layout"

const SlobozhanskiePage = ({ data }) => {
  const { groupName, productCards, groupTitle } = data.ecoline.frontmatter

  return (
    <Layout label="Eco Line - каталог" isEcoLine="true">
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
    ecoline: mdx(frontmatter: { groupName: { eq: "ecoLine" } }) {
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
            color
            type
            group
            companion {
              companionItem
            }
            availability
          }
        }
      }
    }
  }
`

export default SlobozhanskiePage
