import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import {
  Box,
  Divider,
  Card,
  CardContent,
  Grid,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material"

const GroupGrid = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(frontmatter: { group: { eq: "A" } }) {
          frontmatter {
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
  )

  const products = data.mdx.frontmatter.productCards

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ p: 4 }}>
        <Toolbar />

        <Grid container spacing={2}>
          {products.map(({ image, itemNumber, features }) => {
            const { color, type, group, companion, availability } = features[0]

            const { companionItem, companionLink } = companion[0]

            const productImage = getImage(image)

            return (
              <Grid key={itemNumber} item xs={4}>
                <Card>
                  <GatsbyImage image={productImage} alt={itemNumber} />
                  <CardContent>
                    <Typography fontWeight="bold" gutterBottom variant="h5">
                      {itemNumber}
                    </Typography>

                    <Divider sx={{ mb: 1 }} />

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Колір:
                      </Typography>
                      <Typography fontSize="20px">{color}</Typography>
                    </Stack>

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Тип малюнка:
                      </Typography>
                      <Typography fontSize="20px">{type}</Typography>
                    </Stack>

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Група:
                      </Typography>
                      <Typography fontSize="20px">{group}</Typography>
                    </Stack>

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Компаньйон:
                      </Typography>
                      <Typography fontSize="20px">{companionItem}</Typography>
                    </Stack>

                    <Divider sx={{ mb: 2, mt: 1 }} />

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Наявність на складі:
                      </Typography>
                      <Typography fontSize="20px">{availability}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default GroupGrid
