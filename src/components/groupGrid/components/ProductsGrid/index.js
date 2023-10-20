import React from "react"

import ProductsGridItem from "./ProductsGridItem"
import { Grid } from "@mui/material"

const ProductsGrid = ({ productCards, handleOpen }) => {
  return (
    <Grid container spacing={3}>
      {productCards.map(({ itemNumber, ...rest }) => {
        return (
          <ProductsGridItem
            key={itemNumber}
            handleOpen={handleOpen}
            itemNumber={itemNumber}
            {...rest}
          />
        )
      })}
    </Grid>
  )
}

export default ProductsGrid
