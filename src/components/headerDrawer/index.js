import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"
import { ListItemButton } from "gatsby-theme-material-ui"
import React from "react"

const HeaderDrawer = ({ handleDrawerToggle, navItems }) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Слобожанские
      </Typography>

      <Divider />

      <List>
        {navItems.map(({ label, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default HeaderDrawer
