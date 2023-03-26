import { Box, styled } from "@mui/material"

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled("main")`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 1536px) {
    padding: 32px;
  }

  @media (max-width: 900px) {
    padding: 24px;
  }

  @media (max-width: 600px) {
    padding: 16px;
  }

  @media (min-width: 0px) {
    padding: 0px;
  }
`
