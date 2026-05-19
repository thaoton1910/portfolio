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

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />
      <Hero />

      <Box component="main">
        
      </Box>
    </ThemeProvider>
  )
}

export default App
