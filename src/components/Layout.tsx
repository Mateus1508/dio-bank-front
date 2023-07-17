import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return(
    <Box minHeight='100vh' backgroundColor='#26143b' >
      <Header />
      { children }
    </Box>
  )
}