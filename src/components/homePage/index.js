import React from "react"

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Stack,
} from "@mui/material"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

const HomePage = ({ data }) => {
  const { catalogues } = data.home.frontmatter

  console.log(catalogues)

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
        {catalogues.map(({ label, description, link, image }, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <Stack sx={{ height: "100%" }} justifyContent="space-between">
                <CardActionArea>
                  <Link to={link}>
                    <CardContent sx={{ p: 0 }}>
                      <GatsbyImage image={getImage(image)} alt={label} />

                      <Box sx={{ pl: 1, pr: 1, pb: 1 }}>
                        <Typography
                          sx={{ fontSize: { xs: "21px", md: "24px" } }}
                          mt={2}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {label}
                        </Typography>
                        <Typography color="text.secondary">
                          {description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link to={link}>Перейти</Link>
                  </Button>
                </CardActions>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default HomePage
