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
  padding: 32px;

  @media (max-width: 1200px) {
    padding: 16px;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }
`
