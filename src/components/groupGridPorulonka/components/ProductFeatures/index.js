import React from "react"
import { Divider, Typography, Stack, Box, Link } from "@mui/material"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ProductFeatures = ({ features, handleOpacityChange, isSlob }) => {
  const { color, type, group, availability, companion } = features[0]

  const handleAnchorLinkClick = companionItem => {
    handleOpacityChange(companionItem)
  }

  const ordinaryItems = [
    { label: "Колір:", value: color },
    { label: "Тип малюнка:", value: type },
    { label: isSlob ? "Група:" : "Колекція:", value: group },
  ]

  return (
    <>
      {companion ? (
        <Stack direction="row" gap={1} alignItems="center" flexWrap="wrap">
          <Typography fontSize="18px" fontWeight="bold">
            ПартіЇ:
          </Typography>

          {companion.map(({ companionItem }, index) => (
            <Typography key={index} fontSize="18px">
              {companionItem} рул.
              {index < companion.length - 1 && ","}
            </Typography>
          ))}
        </Stack>
      ) : (
        <Box height="30px" />
      )}
    </>
  )
}

export default ProductFeatures
