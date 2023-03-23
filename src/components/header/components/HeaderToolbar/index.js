import { AppBar, Toolbar, Typography, Box, Button, IconButton  } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import React from 'react'

const HeaderToolbar = ({handleDrawerToggle, navItems}) => {
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
        Електронний каталог
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
  )
}

export default HeaderToolbar