import React from "react"
import { graphql } from "gatsby"
import GroupGrid from "../components/groupGrid"

import Header from "../components/header"

import { Toolbar, Box } from "@mui/material"

import '../styles/reset.css'

const IndexPage = ({ data }) => {
  const groups = [data.groupA, data.groupB]

  return (
    <>
      <Header />

      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ p: 4 }}>
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
              companionLink
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
              companionLink
            }
            availability
          }
        }
      }
    }
  }
`

export default IndexPage
