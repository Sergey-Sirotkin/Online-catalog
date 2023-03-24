import React, { useCallback, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Divider,
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
  Chip,
  Dialog,
} from "@mui/material"

import ProductFeatures from "./components"
import { Button } from "gatsby-material-ui-components"

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

  const handleOpen = ({ productImage, itemNumber }) => {
    setLightboxImage({ productImage, itemNumber })
  }

  const handleClose = () => {
    setLightboxImage(null)
  }

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
        {productCards.map(({ image, itemNumber, features }, index) => {
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
        <Dialog
          open={Boolean(lightboxImage)}
          onClose={handleClose}
          maxWidth="xl"
          PaperProps={{
            sx: {
              margin: "5px",
            },
          }}
        >
          <GatsbyImage
            image={lightboxImage.productImage}
            alt={lightboxImage.itemNumber}
          />

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: "60px", pr: 2, pl: 2 }}
          >
            <Typography
              sx={{ fontSize: { xs: "h7", sm: "h6" } }}
              fontWeight="bold"
            >
              Артикул: {lightboxImage.itemNumber}
            </Typography>
            <Button
              sx={{ maxHeight: "40px" }}
              variant="contained"
              onClick={handleClose}
            >
              Закрити
            </Button>
          </Stack>
        </Dialog>
      )}
    </>
  )
}

export default GroupGrid
