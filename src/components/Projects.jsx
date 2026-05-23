import React from "react";
import { Box, Container, Typography, Card, CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./Projects.css";

import project1 from "../assets/analog-only_solar_panel.jpg";
import project2 from "../assets/analog-only_solar_panel.jpg";
import project3 from "../assets/analog-only_solar_panel.jpg";
import project4 from "../assets/analog-only_solar_panel.jpg";

const Projects = () => {
  const theme = useTheme();

  const myProjects = [
    {
      title: "Analog-Only Solar Panel",
      subtitle: "Auto Charging and Auto Tracing to Light Source",
      image: project1,
      link: "https://github.com/thaoton1910/portfolio",
    },
    {
      title: "Answer Files",
      subtitle: "Auto Charging and Auto Tracing to Light Source",
      image: project2,
      link: "https://github.com/thaoton1910/portfolio",
    },
    {
      title: "Expression Evaluator",
      subtitle: "Auto Charging and Auto Tracing to Light Source",
      image: project3,
      link: "https://github.com/thaoton1910/portfolio",
    },
    {
      title: "NixOS-WSL Configuration",
      subtitle: "Auto Charging and Auto Tracing to Light Source",
      image: project4,
      link: "https://github.com/thaoton1910/portfolio",
    },
  ];

  return (
    <Box
      component="section"
      className="projects-root"
      id="projects"
      style={{
        "--primary-main": theme.palette.primary.main,
        "--primary-dark": theme.palette.primary.dark,
        "--secondary-main": theme.palette.secondary.main,
        "--background": theme.palette.background.default,
        "--light-matcha": theme.palette.custom.lightMatcha,
        "--light-strawberry": theme.palette.custom.lightStrawberry,
        "--text-light": theme.palette.text.light,
        "--text-dark": theme.palette.text.dark,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" className="projects-main-title">
            Personal Projects
          </Typography>
        </Box>

        <Box className="projects-clean-grid">
          {myProjects.map((project, index) => (
            <Card className="project-card" key={index}>
              <CardActionArea
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-area"
              >
                {/* Top 85%: Visual Showcase Canvas */}
                <Box className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-display-image"
                  />
                </Box>

                {/* Bottom 15%: Solid Title & Subtitle Banner */}
                <Box className="project-title-banner">
                  <Typography variant="h6" className="project-card-title">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="project-card-subtitle">
                    {project.subtitle}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;