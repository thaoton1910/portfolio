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

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />
      <Hero />

      <Box component="main">
        <Box id="about">
          <About />
        </Box>

        <Box id="experience">
          <Experience />
        </Box>

        <Box id="projects">
          <Projects />
        </Box>

        <Box id="contact" component="footer">
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
