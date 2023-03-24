import React from "react"
import { Divider, Typography, Stack, Box } from "@mui/material"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ProductFeatures = ({ features }) => {
  const { color, type, group, availability, companion } = features[0]

  const { companionItem, companionLink } = companion[0]

  return (
    <>
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

      {companionItem ? (
        <Stack direction="row" gap={1} alignItems="center">
          <Typography fontSize="20px" fontWeight="bold">
            Компаньйон:
          </Typography>

          <AnchorLink to={companionLink }>
            <Typography fontSize="20px">{companionItem}</Typography>
          </AnchorLink>
        </Stack>
      ) : (
        <Box height="30px" />
      )}

      <Divider sx={{ mb: 2, mt: 1 }} />

      <Stack
        direction="row"
        gap={1}
        alignItems="center"
        justifyContent="center"
      >
        <Typography fontSize="20px" fontWeight="bold">
          Наявність на складі:
        </Typography>

        <Typography fontSize="20px">{availability} рул.</Typography>
      </Stack>
    </>
  )
}

export default ProductFeatures
