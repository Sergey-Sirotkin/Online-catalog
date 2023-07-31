import React, { useCallback, useState } from "react"

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
                  position: "relative",
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
                {promo && (
                  <Box
                    sx={{
                      backgroundColor: "#d32f2f",
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      p: "5px",
                    }}
                  >
                    <Stack alignItems="center">
                      <Stack
                        direction="row"
                        gap={1.5}
                        alignItems="center"
                        justifyContent="center"
                        mb={0.5}
                      >
                        <Typography
                          fontWeight={700}
                          textAlign="center"
                          color="#fff"
                          fontSize={18}
                        >
                          АКЦІЯ ЛИПНЯ
                        </Typography>

                        <Chip
                          label="-10%"
                          sx={{
                            color: "#d32f2f",
                            fontWeight: 700,
                            fontSize: "18px",
                            backgroundColor: '#fff'
                          }}
                        />
                      </Stack>

                      <Divider sx={{ width: "80%", borderColor: "#fff" }} />

                      <Typography
                        fontSize={18}
                        fontWeight={700}
                        textAlign="center"
                        color="#fff"
                      >
                        продовжена до 15/08/23
                      </Typography>
                    </Stack>
                  </Box>
                )}
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

                  {/* {promo && (
                    <Chip
                      sx={{
                        height: "auto",
                        p: "5px 0",
                      }}
                      label={
                        <Stack alignItems="center">
                          <Typography fontWeight={700} textAlign="center">
                            АКЦІЯ ЛИПНЯ &nbsp; -10%
                          </Typography>

                          <Divider
                            sx={{ width: "100%", borderColor: "#fff" }}
                          />

                          <Typography fontWeight={700} textAlign="center">
                            продовжена до
                          </Typography>

                          <Typography fontWeight={700} textAlign="center">
                            15/08/23
                          </Typography>
                        </Stack>
                      }
                      color="error"
                    />
                  )} */}
                </Stack>

                <Divider sx={{ mb: 1 }} />

                <ProductFeatures
                  promo={promo}
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
