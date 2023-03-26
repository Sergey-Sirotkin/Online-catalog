import React from "react"
import { Divider, Typography, Stack, Box, Link } from "@mui/material"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ProductFeatures = ({ features, handleOpacityChange }) => {
  const { color, type, group, availability, companion } = features[0]

  const { companionItem } = companion[0]

  const handleAnchorLinkClick = () => {
    handleOpacityChange(companionItem)
  }

  const ordinaryItems = [
    { label: "Колір:", value: color },
    { label: "Тип малюнка:", value: type },
    { label: "Група:", value: group },
  ]

  return (
    <>
      {ordinaryItems.map(({ label, value }) => (
        <Stack key={label} direction="row" gap={1} alignItems="center">
          <Typography fontSize="18px" fontWeight="bold">
            {label}
          </Typography>

          <Typography fontSize="18px">{value}</Typography>
        </Stack>
      ))}

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
