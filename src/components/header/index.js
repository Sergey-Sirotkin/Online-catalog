import React, { useCallback, useState } from "react"

import { Box, Drawer } from "@mui/material"

import HeaderDrawer from "../headerDrawer"
import HeaderToolbar from "./components/HeaderToolbar"

const Header = props => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(prevState => !prevState)
  }, [setMobileOpen])

  const navItems = [
    { id: "A", label: "Група - А" },
    { id: "B", label: "Група - В" },
    { id: "C", label: "Група - С" },
    { id: "A1", label: "Акція - 1" },
    { id: "A2", label: "Акція - 2" },
  ]

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div>
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
            display: { xs: "block", md: "none" },
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
