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

const HeaderToolbar = ({
  handleDrawerToggle,
  navItems,
  label,
  isHomePage,
  isEcoLine,
  isSlob,
}) => {
  const homeNavItems = [
    { link: "/slobozhanskie", label: "Слобожанские" },
    { link: "/ecoline", label: "Eco Line" },
    { link: "/fliz", label: "Флізелін" },
  ]

  return (
    <AppBar component="nav">
      <Toolbar>
        {!isEcoLine && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          {label}
        </Typography>

        {!isEcoLine && (
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
              : isSlob
              ? navItems.slob.map(({ label, id }) => (
                  <AnchorLink stripHash key={id} to={`#${id}`}>
                    <Button sx={{ color: "#fff" }}>{label}</Button>
                  </AnchorLink>
                ))
              : navItems.fliz.map(({ label, id }) => (
                  <AnchorLink stripHash key={id} to={`#${id}`}>
                    <Button sx={{ color: "#fff" }}>{label}</Button>
                  </AnchorLink>
                ))}
          </Stack>
        )}
        {!isHomePage && (
          <Button
            sx={{ ml: { xs: "auto", sm: 2 } }}
            color="info"
            variant="contained"
          >
            <Link to="/">Головна</Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderToolbar
