import React, { useCallback, useState } from "react"

import {
  Button,
  Divider,
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
  Chip,
  Dialog,
} from "@mui/material"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ProductFeatures from "./components/ProductFeatures"
import ProductDialog from "./components/ProductDialog"

const GroupGrid = ({ productCards, groupTitle, groupName }) => {
  const [lightboxImage, setLightboxImage] = useState(null)

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

  const handleOpen = useCallback(({ productImage, itemNumber }) => {
    setLightboxImage({ productImage, itemNumber })
  }, [])

  const handleClose = useCallback(() => {
    setLightboxImage(null)
  }, [])

  return (
    <>
      <Stack
        id={groupName}
        alignItems="center"
        sx={{
          mb: 5,
          mt: 4,
        }}
      >
        <Chip
          sx={{
            fontSize: { xs: "25px", md: "45px" },
            padding: "35px",
            borderRadius: "30px",
          }}
          label={groupTitle}
          color="info"
        />
      </Stack>

      <Grid container spacing={3}>
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
                  <Typography fontWeight="bold" gutterBottom variant="h6">
                    Артикул: {itemNumber}
                  </Typography>

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

      {lightboxImage && (
        <ProductDialog
          lightboxImage={lightboxImage}
          handleClose={handleClose}
        />
      )}
    </>
  )
}

export default GroupGrid
