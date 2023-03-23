import React, { useCallback, useState } from "react"

import { Box, CssBaseline, Drawer } from "@mui/material"

import HeaderDrawer from "../headerDrawer"
import HeaderToolbar from "./components/HeaderToolbar"

const Header = props => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(prevState => !prevState)
  }, [setMobileOpen])

  const navItems = ["Група А", "Група В", "Група С", "Акція 1", "Акція 2"]

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div>
      <CssBaseline />

      <HeaderToolbar
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
      />

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "80%",
            },
          }}
        >
          <HeaderDrawer
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
          />
        </Drawer>
      </Box>
    </div>
  )
}

export default Header
