import React from "react"

import { Grid, Typography } from "@mui/material"
import CardItem from "./components/CardItem"

const HomePage = ({ data }) => {
  const { catalogues } = data.home.frontmatter

  return (
    <>
      <Typography
        mt={4}
        textAlign="center"
        variant="h1"
        sx={{ fontSize: { xs: "35px", md: "50px" } }}
      >
        Оберіть каталог
      </Typography>

      <Grid mt={1} container spacing={3}>
        {catalogues.map((props, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <CardItem {...props} key={index} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default HomePage
