import React from "react"

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Stack,
} from "@mui/material"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CardItem = ({ image, link, label, description }) => {
  return (
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
                <Typography color="text.secondary">{description}</Typography>
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
  )
}

export default CardItem
