import React, { useCallback, useState } from "react"

import { Stack, Chip } from "@mui/material"

import ProductDialog from "./components/ProductDialog"
import ProductsGrid from "./components/ProductsGrid"

const GroupGrid = ({ productCards, groupTitle, groupName, isSlob }) => {
  const [lightboxImage, setLightboxImage] = useState(null)

  const handleOpen = useCallback(({ image, itemNumber }) => {
    setLightboxImage({ productImage: image, itemNumber })
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
        {groupTitle !== "Група А" && (
          <Chip
            sx={{
              fontSize: { xs: "25px", md: "45px" },
              padding: "35px",
              borderRadius: "30px",
            }}
            label={groupTitle}
            color="info"
          />
        )}
      </Stack>

      <ProductsGrid
        productCards={productCards}
        handleOpen={handleOpen}
        isSlob={isSlob}
      />

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
