import React from "react"
import { graphql } from "gatsby"
import GroupGrid from "../components/groupGrid"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Fliz = ({ data }) => {
  const groups = [
    data.villaVanilla,
    data.elegantHome
    // data.paintable,
  ]
  return (
    <Layout label="Флізелін - каталог">
    {groups.map(group => {
      const { groupName, productCards, groupTitle } = group.frontmatter

      return (
        <GroupGrid
          key={groupName}
          productCards={productCards}
          groupTitle={groupTitle}
          groupName={groupName}
        />
      )
    })}
  </Layout>
  )
}

export const Head = () => <Seo />

export const query = graphql`
  query {
    villaVanilla: mdx(frontmatter: { groupName: { eq: "villaVanilla" } }) {
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
    elegantHome: mdx(frontmatter: { groupName: { eq: "elegantHome" } }) {
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
    # paintable: mdx(frontmatter: { groupName: { eq: "paintable" } }) {
    #   frontmatter {
    #     groupName
    #     groupTitle
    #     productCards {
    #       image {
    #         childImageSharp {
    #           gatsbyImageData
    #         }
    #       }
    #       itemNumber
    #       features {
    #         color
    #         type
    #         group
    #         companion {
    #           companionItem
    #         }
    #         availability
    #       }
    #     }
    #   }
    # }
  }
`

export default Fliz