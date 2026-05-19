import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import "./Hero.css";

import avatar from "../assets/avatar.jpeg";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      className="hero-root"
      id="home"
      style={{
        "--primary-main": theme.palette.primary.main,
        "--primary-dark": theme.palette.primary.dark,
        "--secondary-main": theme.palette.secondary.main,
        "--light-matcha": theme.palette.custom.lightMatcha,
        "--light-strawberry": theme.palette.custom.lightStrawberry,
        "--text-parchment": "#F9F7F2",
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          alignItems="center" 
          justifyContent="center"
          className="hero-grid-container"
        >
          {/* Left Side: Avatar */}
          <Grid item xs={12} md={5} className="hero-avatar-zone">
            <Box className="avatar-frame">
              <img 
                src={avatar} 
                alt="Ton Nu Thanh Thao" 
                className="avatar-image" 
              />
            </Box>
          </Grid>

          {/* Right Side: Content */}
          <Grid item xs={12} md={7} className="hero-text-zone">
            <Typography variant="h1" className="hero-title">
              Ton Nu Thanh Thao
            </Typography>

            <Box className="hero-divider" />

            <Typography variant="h5" className="hero-subtitle">
              Ex-Technical Documentation Intern | Bosch Vietnam
            </Typography>

            <Button
              variant="contained"
              size="large"
              className="hero-button"
              href="mailto:thaoton1910@gmail.com"
            >
              Get in Touch
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;