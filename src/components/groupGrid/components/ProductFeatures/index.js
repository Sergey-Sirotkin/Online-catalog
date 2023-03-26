import React from "react"
import { Divider, Typography, Stack, Box, Link } from "@mui/material"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ProductFeatures = ({ features, handleOpacityChange,  }) => {
  const { color, type, group, availability, companion } = features[0]

  const { companionItem } = companion[0]


  const handleAnchorLinkClick = () => {
    handleOpacityChange(companionItem)
  }

  return (
    <>
      <Stack direction="row" gap={1} alignItems="center">
        <Typography fontSize="18px" fontWeight="bold">
          Колір:
        </Typography>

        <Typography fontSize="18px">{color}</Typography>
      </Stack>

      <Stack direction="row" gap={1} alignItems="center">
        <Typography fontSize="18px" fontWeight="bold">
          Тип малюнка:
        </Typography>

        <Typography fontSize="18px">{type}</Typography>
      </Stack>

      <Stack direction="row" gap={1} alignItems="center">
        <Typography fontSize="18px" fontWeight="bold">
          Група:
        </Typography>

        <Typography fontSize="18px">{group}</Typography>
      </Stack>

      {companionItem ? (
        <Stack direction="row" gap={1} alignItems="center">
          <Typography fontSize="18px" fontWeight="bold">
            Компаньйон:
          </Typography>

          <AnchorLink
            to={`#id${companionItem}`}
            onAnchorLinkClick={handleAnchorLinkClick}
          >
            <Link component="div" underline="always">
              <Typography fontSize="18px">{companionItem}</Typography>
            </Link>
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
        <Typography fontSize="18px" fontWeight="bold">
          Наявність на складі:
        </Typography>

        <Typography fontSize="18px">{availability} рул.</Typography>
      </Stack>
    </>
  )
}

export default ProductFeatures
