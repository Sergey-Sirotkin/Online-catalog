import React from "react"
import { graphql } from "gatsby"
import GroupGrid from "../components/groupGrid"

import Header from "../components/header"

import { Toolbar, Box } from "@mui/material"

import "../styles/reset.css"

const IndexPage = ({ data }) => {
  const groups = [data.groupA, data.groupB, data.groupC, data.groupA1]

  return (
    <>
      <Header />

      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ p: { xs: 0, sm: 2, md: 3, xl: 4 } }}>
          <Toolbar />
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
        </Box>
      </Box>
    </>
  )
}

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
  }
`

export default IndexPage
