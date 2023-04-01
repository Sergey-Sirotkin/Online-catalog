import React from "react"

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  ListItemButton,
} from "@mui/material"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const HeaderDrawer = ({ handleDrawerToggle, navItems, isHomePage }) => {
  const homeNavItems = [
    { link: "/slobozhanskie", label: "Слобожанские" },
    { link: "/", label: "Eco Line" },
    { link: "/", label: "Флізелін" },
  ]

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Слобожанские
      </Typography>

      <List>
        <Divider />
        {isHomePage
          ? homeNavItems.map(({ link, label }, index) => (
              <Stack key={index}>
                <Link to={link}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </Link>
              </Stack>
            ))
          : navItems.map(({ label, id }) => (
              <Stack key={id}>
                <AnchorLink to={`#${id}`}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </AnchorLink>
              </Stack>
            ))}
      </List>
    </Box>
  )
}

export default HeaderDrawer
