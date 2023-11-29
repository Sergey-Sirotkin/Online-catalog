import React, { useCallback, useState } from "react"

import { Box, Drawer, Toolbar } from "@mui/material"

import HeaderDrawer from "../headerDrawer"
import HeaderToolbar from "./components/HeaderToolbar"

const Header = props => {
  const { window, label, isHomePage, isEcoLine, isSlob } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(prevState => !prevState)
  }, [setMobileOpen])

  const navItems = {
    slob: [
      { id: "A", label: "Група - А" },
      { id: "B", label: "Група - В" },
      { id: "C", label: "Група - С" },
      { id: "A1", label: "Акція - 1" },
      { id: "A2", label: "Акція - 2" },
    ],
    fliz: [
      { id: "villaVanilla", label: "Villa Vanilla" },
      { id: "elegantHome", label: "Elegant Home" },
      // { id: "paintable", label: "Малярний Флізелін" },
    ],
  }

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
        isSlob={isSlob}
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
              isSlob={isSlob}
            />
          </Drawer>
        </Box>
      )}

      <Toolbar />
    </>
  )
}

export default Header
