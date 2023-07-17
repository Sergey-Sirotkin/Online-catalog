import React, { useCallback, useState } from "react"

import {
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ProductFeatures from "../ProductFeatures"

const ProductsGrid = ({ productCards, handleOpen }) => {
  const [opacity, setOpacity] = useState(1)
  const [border, setBorder] = useState(null)
  const [currentCompanion, setCurrentCompanion] = useState(null)

  const handleOpacityChange = useCallback(companionItem => {
    setOpacity(0.5)
    setBorder("4px solid #1976d2")
    setCurrentCompanion(companionItem)

    setTimeout(() => {
      setOpacity(1)
      setBorder(null)
    }, 2000)
  }, [])

  return (
    <Grid container spacing={3}>
      {productCards.map(({ image, itemNumber, features, promo }) => {
        const productImage = getImage(image)

        return (
          <Grid
            id={`id${itemNumber}`}
            key={itemNumber}
            item
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Card sx={{ height: "100%" }}>
              <Stack
                alignItems="center"
                sx={{
                  opacity: currentCompanion === itemNumber && opacity,
                  border: currentCompanion === itemNumber && border,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
                onClick={() => handleOpen({ productImage, itemNumber })}
              >
                <GatsbyImage image={productImage} alt={itemNumber} />
              </Stack>

              <CardContent
                sx={{
                  p: { xs: 1, md: 2 },
                  "&:last-child": {
                    paddingBottom: 2,
                  },
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography fontWeight="bold" variant="h6">
                    Артикул: {itemNumber}
                  </Typography>

                  {promo && (
                    <Chip
                      sx={{ fontWeight: 700, fontSize: 16 }}
                      label="АКЦІЯ ЛИПНЯ -10%"
                      color="error"
                    />
                  )}
                </Stack>

                <Divider sx={{ mb: 1 }} />

                <ProductFeatures
                  features={features}
                  handleOpacityChange={handleOpacityChange}
                />
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProductsGrid
