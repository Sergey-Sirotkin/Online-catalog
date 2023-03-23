import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
} from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

const navItems = ["Група А", "Група В", "Група С", "Акція 1", "Акція 2"]

export default function DrawerAppBar(props) {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(frontmatter: { group: { eq: "A" } }) {
          frontmatter {
            productCards {
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              itemNumber
              features {
                color
                type
                group
                companion {
                  companionItem
                  companionLink
                }
                availability
              }
            }
          }
        }
      }
    `
  )

  const products = data.mdx.frontmatter.productCards

  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Електронний каталог - Слобожанские
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Електронний каталог - Слобожанские
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(item => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "80%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 4 }}>
        <Toolbar />

        <Grid container spacing={2}>
          {products.map(({ image, itemNumber, features }) => {
            const { color, type, group, companion, availability } = features[0]

            const { companionItem, companionLink } = companion[0]

            const productImage = getImage(image)

            return (
              <Grid key={itemNumber} item xs={4}>
                <Card>
                  <GatsbyImage image={productImage} alt={itemNumber} />
                  <CardContent>
                    <Typography fontWeight="bold" gutterBottom variant="h5">
                      {itemNumber}
                    </Typography>

                    <Divider sx={{ mb: 1 }} />

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Колір:
                      </Typography>
                      <Typography fontSize="20px">{color}</Typography>
                    </Stack>

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Тип малюнка:
                      </Typography>
                      <Typography fontSize="20px">{type}</Typography>
                    </Stack>

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Група:
                      </Typography>
                      <Typography fontSize="20px">{group}</Typography>
                    </Stack>

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Компаньйон:
                      </Typography>
                      <Typography fontSize="20px">{companionItem}</Typography>
                    </Stack>

                    <Divider sx={{ mb: 2, mt: 1 }} />

                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography fontSize="20px" fontWeight="bold">
                        Наявність на складі:
                      </Typography>
                      <Typography fontSize="20px">{availability}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}
