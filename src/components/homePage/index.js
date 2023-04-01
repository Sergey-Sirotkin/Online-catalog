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
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { Stack } from "@mui/system"

const HomePage = () => {
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
        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ height: "100%" }}>
            <Stack sx={{ height: "100%" }} justifyContent="space-between">
              <CardActionArea>
                <CardContent sx={{ p: 0 }}>
                  <StaticImage src="../../images/slob.jpg" alt="A dinosaur" />

                  <Box sx={{ pl: 1, pr: 1, pb: 1 }}>
                    <Typography
                      sx={{ fontSize: { xs: "21px", md: "24px" } }}
                      mt={2}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Слобожанские
                    </Typography>
                    <Typography color="text.secondary">
                      Акрилові шпалери на паперовій основі
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Перейти
                </Button>
              </CardActions>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ height: "100%" }}>
            <Stack sx={{ height: "100%" }} justifyContent="space-between">
              <CardActionArea>
                <CardContent sx={{ p: 0 }}>
                  <StaticImage
                    src="../../images/ecoLine.jpg"
                    alt="A dinosaur"
                  />
                  <Box sx={{ pl: 1, pr: 1, pb: 1 }}>
                    <Typography
                      mt={2}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Eco Line
                    </Typography>
                    <Typography color="text.secondary">
                      Рельєфні шпалери на паперовій основі
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Перейти
                </Button>
              </CardActions>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ height: "100%" }}>
            <Stack sx={{ height: "100%" }} justifyContent="space-between">
              <CardActionArea>
                <CardContent sx={{ p: 0 }}>
                  <StaticImage
                    src="../../images/elegant.jpg"
                    alt="A dinosaur"
                  />

                  <Box sx={{ pl: 1, pr: 1, pb: 1 }}>
                    <Typography
                      mt={2}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Флізелінові шпалери
                    </Typography>
                    <Typography color="text.secondary">
                      Рельєфні шпалери на флізеліновій основі та малярний
                      флізелін
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Перейти
                </Button>
              </CardActions>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
