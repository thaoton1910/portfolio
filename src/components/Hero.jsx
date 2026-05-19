import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
        "--light-text": theme.palette.text.light,
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

            <Box className="hero-actions">
              <Button
                variant="contained"
                className="hero-btn"
                href={`${import.meta.env.BASE_URL}Ton-Nu-Thanh-Thao-resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>

              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/ton-nu-thanh-thao/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-icon"
              >
                <LinkedInIcon />
              </IconButton>
              
              <IconButton
                component={Link}
                href="https://github.com/thaoton1910"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-icon"
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                component={Link}
                href="mailto:thaoton1910@gmail.com"
                className="hero-btn-icon"
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
