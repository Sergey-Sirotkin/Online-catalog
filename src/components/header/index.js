import React, { useCallback, useState } from "react"

import { Box, Drawer, Toolbar } from "@mui/material"

import HeaderDrawer from "../headerDrawer"
import HeaderToolbar from "./components/HeaderToolbar"

const Header = props => {
  const { window, label, isHomePage, isEcoLine } = props
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
    <>
      <HeaderToolbar
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
        label={label}
        isHomePage={isHomePage}
        isEcoLine={isEcoLine}
      />

      {!isEcoLine && (
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
              isHomePage={isHomePage}
            />
          </Drawer>
        </Box>
      )}

      <Toolbar />
    </>
  )
}

export default Header
