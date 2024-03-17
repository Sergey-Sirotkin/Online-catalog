import React from "react"
import { Divider, Typography, Stack, Box, Link } from "@mui/material"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ProductFeatures = ({ features, handleOpacityChange, isSlob }) => {
  const { color, type, group, availability, companion } = features[0]

  const isAviablility = availability > 0

  const isSoon = availability === "Незабаром на складі"

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
      {ordinaryItems.map(({ label, value }) => (
        <Stack key={label} direction="row" gap={1} alignItems="center">
          <Typography fontSize="18px" fontWeight="bold">
            {label}
          </Typography>

          <Typography fontSize="18px">{value}</Typography>
        </Stack>
      ))}

      {companion ? (
        <Stack direction="row" gap={1} alignItems="center" flexWrap="wrap">
          <Typography fontSize="18px" fontWeight="bold">
            Компаньйон:
          </Typography>

          {companion.map(({ companionItem }, index) => (
            <AnchorLink
              key={index}
              to={`#id${companionItem}`}
              onAnchorLinkClick={() => handleAnchorLinkClick(companionItem)}
            >
              <Link component="div" underline="always">
                <Typography fontSize="18px">
                  {companionItem}
                  {index < companion.length - 1 && ","}
                </Typography>
              </Link>
            </AnchorLink>
          ))}
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
        {isSoon ? (
          <Typography fontSize="18px" fontWeight="bold" color="#d32f2f">
            Незабаром на складі !
          </Typography>
        ) : (
          <>
            <Typography fontSize="18px" fontWeight="bold">
              Наявність на складі:
            </Typography>

            <Typography fontSize="18px">
              {availability}
              {isAviablility && " рул."}
            </Typography>
          </>
        )}
      </Stack>
    </>
  )
}

export default ProductFeatures
