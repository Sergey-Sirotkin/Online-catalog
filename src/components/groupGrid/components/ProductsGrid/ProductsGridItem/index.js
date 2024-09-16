import React, { useCallback, useEffect, useState } from "react"

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ProductFeatures from "../../ProductFeatures"

const ProductsGridItem = ({
  handleOpen,
  itemNumber,
  image,
  features,
  additionalImage,
}) => {
  const [opacity, setOpacity] = useState(1)
  const [border, setBorder] = useState(null)
  const [currentCompanion, setCurrentCompanion] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  const productImage = getImage(image)
  const additionalProductImage = getImage(additionalImage)
  const is16m = itemNumber === "477-02"

  useEffect(() => {
    setMainImage(productImage)
  }, [productImage])

  const handleOpacityChange = useCallback(companionItem => {
    setOpacity(0.5)
    setBorder("4px solid #1976d2")
    setCurrentCompanion(companionItem)

    setTimeout(() => {
      setOpacity(1)
      setBorder(null)
    }, 2000)
  }, [])

  const handleChangeMainImage = image => {
    setMainImage(image)
  }

  const handleLightBoxOpen = useCallback(() => {
    handleOpen({ image: mainImage, itemNumber })
  }, [mainImage, itemNumber, handleOpen])

  const isNotAvailable = features[0].availability === "тимч. відсутні"

  return (
    <Grid id={`id${itemNumber}`} item sm={12} md={6} lg={4} xl={3}>
      <Card sx={{ height: "100%" }}>
        <Stack justifyContent="space-between" height="100%">
          <Stack
            alignItems="center"
            sx={{
              position: "relative",
              opacity: currentCompanion === itemNumber && opacity,
              border: currentCompanion === itemNumber && border,
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                opacity: 0.8,
              },
            }}
            onClick={handleLightBoxOpen}
          >
            <GatsbyImage image={mainImage} alt={itemNumber} />
          </Stack>

          <CardContent
            sx={{
              p: { xs: 1, md: 2 },
              "&:last-child": {
                paddingBottom: 2,
              },
            }}
          >
            {additionalProductImage && (
              <Stack
                mb={2}
                direction="row"
                gap={2}
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  sx={{
                    borderRadius: "4px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": {
                      opacity: 0.8,
                    },
                    border: mainImage === productImage && "2px solid #1976d2",
                  }}
                  width="80px"
                  height="80px"
                  onClick={() => handleChangeMainImage(productImage)}
                >
                  <GatsbyImage image={productImage} alt={itemNumber} />
                </Box>

                <Box
                  sx={{
                    borderRadius: "4px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": {
                      opacity: 0.8,
                    },
                    border:
                      mainImage === additionalProductImage &&
                      "2px solid #1976d2",
                  }}
                  width="80px"
                  height="80px"
                  onClick={() => handleChangeMainImage(additionalProductImage)}
                >
                  <GatsbyImage
                    image={additionalProductImage}
                    alt={itemNumber}
                  />
                </Box>
              </Stack>
            )}

            <Box sx={{ opacity: isNotAvailable ? 0.4 : 1 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography fontWeight="bold" variant="h6">
                  Артикул: {itemNumber}
                </Typography>
              </Stack>

              <Divider sx={{ mb: 1 }} />

              <ProductFeatures
                isSlob
                is16m={is16m}
                features={features}
                handleOpacityChange={handleOpacityChange}
              />
            </Box>
          </CardContent>
        </Stack>
      </Card>
    </Grid>
  )
}

export default ProductsGridItem
