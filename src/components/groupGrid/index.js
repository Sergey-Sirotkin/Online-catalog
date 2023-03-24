import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Divider,
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
  Chip,
} from "@mui/material"
import ProductFeatures from "./components"

const GroupGrid = ({ productCards, groupTitle, groupName }) => {
  return (
    <>
      <Stack id={groupName} mb={5} mt={6} alignItems="center">
        <Chip
          sx={{ fontSize: "45px", padding: "30px", borderRadius: "30px" }}
          label={groupTitle}
          color="info"
        />
      </Stack>

      <Grid container spacing={2}>
        {productCards.map(({ image, itemNumber, features }) => {
          const productImage = getImage(image)

          return (
            <Grid
              id={`id${itemNumber}`}
              key={itemNumber}
              item
              sm={12}
              md={6}
              lg={4}
            >
              <Card sx={{ height: "100%" }}>
                <Stack alignItems="center">
                  <GatsbyImage image={productImage} alt={itemNumber} />
                </Stack>

                <CardContent>
                  <Typography fontWeight="bold" gutterBottom variant="h5">
                    Артикул: {itemNumber}
                  </Typography>

                  <Divider sx={{ mb: 1 }} />

                  <ProductFeatures features={features} />
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default GroupGrid
