import React from "react"
import { Link, Stack, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Stack
      sx={{
        mt: 4,
        pl: 3,
        pr: 3,
        height: "60px",
        backgroundColor: "#1976d2",
        justifyContent: { xs: "center", sm: "space-between" },
      }}
      direction="row"
      alignItems="center"
    >
      <Typography
        sx={{ display: { xs: "none", sm: "block" } }}
        fontSize="17px"
        fontWeight="bold"
        color="#fff"
      >
        ТОВ Блок ЛТД
      </Typography>

      <Stack gap={4} direction="row">
        <Link
          fontSize="17px"
          href="tel:067-232-99-43"
          underline="hover"
          style={{
            color: "#fff",
          }}
        >
          067-232-99-43
        </Link>

        <Link
          fontSize="17px"
          href="tel:096-576-19-65"
          underline="hover"
          style={{
            color: "#fff",
          }}
        >
          096-576-19-65
        </Link>
      </Stack>
    </Stack>
  )
}

export default Footer
