import { useState } from 'react'
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Fab,
  Menu,
  MenuItem,
} from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";

import { theme } from "./theme";

import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />
      <Box component="main">
        {/* Your app content goes here */}
      </Box>
    </ThemeProvider>
  )
}

export default App
