import { Box } from '@mui/material'
import { Navbar } from '../molecules'
import { Footer } from '../molecules/Footer'

export function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} minWidth={"100svw"} minHeight={"100svh"} sx={{ overflowX: "hidden" }}>
        <Navbar />
        <Box flex={1}>
          {children}
        </Box>
        <Footer />
      </Box>
    </div>
  )
}
