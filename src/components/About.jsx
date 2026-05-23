import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import "./About.css";

const About = () => {
  const theme = useTheme();

  const stats = [
    {
      label: "Cumulative GPA",
      value: "4.20",
      detail: "Dean's Honour Roll | F2023, W2024, F2024, S2025",
    },
    {
      label: "Co-op Terms",
      value: "3",
      detail: "Infrastructure & Networking, Operations, and Automation Testing",
    },
    {
      label: "Languages",
      value: "4",
      detail: "English, German, Chinese, and Vietnamese",
    },
    {
      label: "International Awards",
      value: "2",
      detail:
        "International Vietnam Language Excellence Entrance Award | CA$2000\nKaren L. Monahan International Award | CA$750",
    },
  ];

  return (
    <Box
      component="section"
      className="about-root"
      id="about"
      style={{
        "--primary-main": theme.palette.primary.main,
        "--primary-dark": theme.palette.primary.dark,
        "--secondary-main": theme.palette.secondary.main,
        "--light-matcha": theme.palette.custom.lightMatcha,
        "--light-strawberry": theme.palette.custom.lightStrawberry,
        "--bg-parchment": theme.palette.background.default,
        "--light-text": theme.palette.text.light,
        "--dark-text": theme.palette.text.dark,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ py: 1, mx: 4 }}>
          {/* Left Column: Biography */}
          <Grid
            xs={12}
            lg={6}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              width: { xs: "100%", md: "45%" },
            }}
          >
            <Typography variant="h2" className="about-name">
              About Me
            </Typography>
            <Typography variant="body1" className="about-bio">
              A Human-Centered Engineering senior at Fulbright University with a
              specialized background in teaching children and developing
              educational products:
            </Typography>

            <Box component="ul" className="about-list">
              <li>
                •Architect precision hardware systems using{" "}
                <strong>Altium</strong> for circuit design,{" "}
                <strong>Autodesk Fusion 360</strong> for 3D modeling, and
                hands-on <strong>circuit soldering/debugging</strong>.
              </li>
              <li>
                • Develop embedded and analytical applications with{" "}
                <strong>C++</strong>, <strong>Python</strong>,{" "}
                <strong>MATLAB</strong>, <strong>Arduino IDE</strong>, and the{" "}
                <strong>Robot Operating System</strong> (<strong>ROS</strong>).
              </li>
              <li>
                • Configure and maintain engineering development environments
                using <strong>Ubuntu</strong>,{" "}
                <strong>Windows Subsystem for Linux</strong> (
                <strong>WSL</strong>), and{" "}
                <strong>VMware virtualization</strong>.
              </li>
            </Box>
          </Grid>

          {/* Right Column: Stats Cards */}
          <Grid
            xs={12}
            lg={6}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Box className="stats-container" sx={{ width: "100%" }}>
              {stats.map((stat, index) => (
                <Box key={index} className="stat-card">
                  <Typography className="stat-value">{stat.value}</Typography>
                  <Box>
                    <Typography className="stat-label">{stat.label}</Typography>
                    <Typography
                      className="stat-detail"
                      sx={{ whiteSpace: "pre-line" }}
                    >
                      {stat.detail}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
