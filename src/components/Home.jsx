import { Box } from "@mui/material";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
