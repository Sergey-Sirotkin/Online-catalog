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

import { styled } from "@mui/system"

const ImageWrapper = styled(Box)({
  transition: "opacity 0.3s ease",

  "&:hover": {
    opacity: 0.8,
  },
})

const CardItem = ({ image, link, porulonkaLink, label, description }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <Stack sx={{ height: "100%" }} justifyContent="space-between">
        <CardActionArea>
          <Link to={link}>
            <CardContent sx={{ p: 0 }}>
              <ImageWrapper>
                <GatsbyImage image={getImage(image)} alt={label} />
              </ImageWrapper>

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

        <CardActions sx={{ mb: 1, justifyContent: "space-between" }}>
          <Button variant="outlined" size="small" color="primary">
            <Link to={link}>Каталог</Link>
          </Button>

          {/* {porulonkaLink && (
            <Button variant="outlined" size="small" color="primary">
              <Link to={porulonkaLink}>Порулонка</Link>
            </Button>
          )}*/}
        </CardActions>
      </Stack>
    </Card>
  )
}

export default CardItem
