import { Box, Button, Dialog, Stack, Typography } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const ProductDialog = ({ lightboxImage, handleClose }) => {
  return (
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
      <Box maxWidth="745px">
        <GatsbyImage
          image={lightboxImage.productImage}
          alt={lightboxImage.itemNumber}
        />
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "60px", pr: 2, pl: 2 }}
      >
        <Typography sx={{ fontSize: { xs: "h7", sm: "h6" } }} fontWeight="bold">
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
  )
}

export default ProductDialog
