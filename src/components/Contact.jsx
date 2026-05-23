import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";
import "./Contact.css";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      className="contact-root"
      id="contact"
      style={{
        "--primary-main": theme.palette.primary.main,
        "--primary-dark": theme.palette.primary.dark,
        "--secondary-main": theme.palette.secondary.main,
        "--light-matcha": theme.palette.custom.lightMatcha,
        "--light-strawberry": theme.palette.custom.lightStrawberry,
        "--text-light": theme.palette.text.light,
        "--text-dark": theme.palette.text.dark,
      }}
    >
      <Container maxWidth="md">
        <Box className="contact-header">
          <Typography variant="h2" className="contact-title">
            Contact Me
          </Typography>
          <Typography variant="body1" className="contact-subtitle">
            Whether for a professional inquiry, a technical dialogue, or
            collaboration, I am always happy to connect!
          </Typography>
        </Box>

        <Grid container spacing={4} className="contact-links">
          <Grid item>
            <IconButton
              component={Link}
              href="https://github.com/thaoton1910"
              target="_blank"
              className="contact-icon-btn"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/khangvum"
              target="_blank"
              className="contact-icon-btn"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component={Link}
              href="mailto:manhkhang0305@gmail.com"
              className="contact-icon-btn"
            >
              <EmailIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Box className="contact-footer-note">
          <Typography variant="caption">
            © 2026 Ton Nu Thanh Thao - Ho Chi Minh City, Vietnam
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
