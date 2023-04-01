import React from "react"
import { graphql } from "gatsby"
import GroupGrid from "../components/groupGrid"

import Seo from "../components/seo"
import Layout from "../components/layout"

const SlobozhanskiePage = ({ data }) => {
  const groups = [
    data.groupA,
    data.groupB,
    data.groupC,
    data.groupA1,
    data.groupA2,
  ]

  return (
    <Layout label="Слобожанские - каталог">
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
    groupA: mdx(frontmatter: { groupName: { eq: "A" } }) {
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
    groupB: mdx(frontmatter: { groupName: { eq: "B" } }) {
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
    groupC: mdx(frontmatter: { groupName: { eq: "C" } }) {
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
    groupA1: mdx(frontmatter: { groupName: { eq: "A1" } }) {
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
    groupA2: mdx(frontmatter: { groupName: { eq: "A2" } }) {
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
