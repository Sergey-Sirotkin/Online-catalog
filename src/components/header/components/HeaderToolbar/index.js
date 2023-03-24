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
import React from "react"

const HeaderToolbar = ({ handleDrawerToggle, navItems }) => {
  return (
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
          Слобожанские
        </Typography>

        <Stack
          direction="row"
          gap={1}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {navItems.map(({ label, id }) => (
            <AnchorLink key={id} to={`#${id}`}>
              <Button sx={{ color: "#fff" }}>{label}</Button>
            </AnchorLink>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderToolbar
