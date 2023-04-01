import React from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const HeaderToolbar = ({ handleDrawerToggle, navItems, label, isHomePage }) => {
  const homeNavItems = [
    { link: "/slobozhanskie", label: "Слобожанские" },
    { link: "/", label: "Eco Line" },
    { link: "/", label: "Флізелін" },
  ]
  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>

        {navItems && (
          <Stack
            direction="row"
            gap={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {isHomePage
              ? homeNavItems.map(({ link, label }, index) => (
                  <Link key={index} to={link}>
                    <Button sx={{ color: "#fff" }}>{label}</Button>
                  </Link>
                ))
              : navItems.map(({ label, id }) => (
                  <AnchorLink key={id} to={`#${id}`}>
                    <Button sx={{ color: "#fff" }}>{label}</Button>
                  </AnchorLink>
                ))}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderToolbar
