import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
import "./ProjectDetail.css";

import project1 from "../assets/analog-only_solar_panel.jpg";

const projectData = {
  "analog-only_solar_panel": {
    title: "Analog-Only Solar Panel",
    subtitle: "Auto Charging and Auto Tracing to Light Source",
    image: project1,
    year: "2026",
    role: "Hardware Systems Lead",
    technologies: ["Altium", "Circuit Design", "Autodesk Fusion 360", "Analog Electronics"],
    demoLink: "https://github.com/thaoton1910/portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ]
  },
  "project2": {
    title: "Analog-Only Solar Panel",
    subtitle: "Auto Charging and Auto Tracing to Light Source",
    image: project1,
    year: "2026",
    role: "Hardware Systems Lead",
    technologies: ["Altium", "Circuit Design", "Autodesk Fusion 360", "Analog Electronics"],
    demoLink: "https://github.com/thaoton1910/portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ]
  },
  "project3": {
    title: "Analog-Only Solar Panel",
    subtitle: "Auto Charging and Auto Tracing to Light Source",
    image: project1,
    year: "2026",
    role: "Hardware Systems Lead",
    technologies: ["Altium", "Circuit Design", "Autodesk Fusion 360", "Analog Electronics"],
    demoLink: "https://github.com/thaoton1910/portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ]
  },
  "project4": {
    title: "Analog-Only Solar Panel",
    subtitle: "Auto Charging and Auto Tracing to Light Source",
    image: project1,
    year: "2026",
    role: "Hardware Systems Lead",
    technologies: ["Altium", "Circuit Design", "Autodesk Fusion 360", "Analog Electronics"],
    demoLink: "https://github.com/thaoton1910/portfolio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ]
  },
};

const ProjectDetail = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  
  const project = projectData[projectName];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectName]);

  if (!project) {
    return (
      <>
        <Navbar />
        <Container sx={{ py: 12, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontFamily: "'Cinzel', serif", fontWeight: 700, mb: 2 }}>
            Project Configuration Missing
          </Typography>
          <Button 
            variant="outlined"
            startIcon={<ArrowBackIcon />} 
            onClick={() => navigate("/")}
            sx={{ fontFamily: "'Cinzel', serif", fontWeight: 700, mt: 2, borderColor: "var(--primary-dark)" }}
          >
            Return to Hub
          </Button>
        </Container>
      </>
    );
  }

  return (
    <Box 
      className="project-detail-root"
      style={{
        "--primary-main": theme.palette.primary.main,
        "--primary-dark": theme.palette.primary.dark,
        "--secondary-main": theme.palette.secondary.main,
        "--light-matcha": theme.palette.custom.lightMatcha,
        "--light-strawberry": theme.palette.custom.lightStrawberry,
        "--background": theme.palette.background.default,
        "--text-light": theme.palette.text.light,
        "--text-dark": theme.palette.text.dark,
        "--hero-bg-img": `url(${project.image})`,
      }}
    >
      <Navbar />

      {/* Hero Section Banner Panel Frame */}
      <Box className="detail-hero-image-bg">
        <Container maxWidth="xl" className="hero-content-stack">
          <Typography variant="h1" className="detail-title">
            {project.title}
          </Typography>
          <Typography variant="h5" className="detail-subtitle">
            {project.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* Main Structural Layout Wrapper */}
      <Container maxWidth="xl" className="detail-main-container">
        <Box className="detail-grid-layout">
          
          {/* Left Side Column: Metadata Sidebar */}
          <Box className="column-left">
            <Box className="metadata-sidebar">
              <Box className="meta-block">
                <Typography className="meta-heading">Timeline</Typography>
                <Typography className="meta-value">{project.year}</Typography>
              </Box>
              <Divider className="meta-divider" />
              
              <Box className="meta-block">
                <Typography className="meta-heading">Role Assignment</Typography>
                <Typography className="meta-value">{project.role}</Typography>
              </Box>
              <Divider className="meta-divider" />
              
              <Box className="meta-block">
                <Typography className="meta-heading">Core Stack Tools</Typography>
                <Box className="tech-chip-grid">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </Box>
              </Box>

              {project.demoLink && (
                <>
                  <Divider className="meta-divider" />
                  <Button
                    variant="contained"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-code-btn"
                    endIcon={<LaunchIcon />}
                  >
                    View Project Code
                  </Button>
                </>
              )}
            </Box>
          </Box>

          {/* Right Side Column: Technical Content Canvas Details */}
          <Box className="column-right">
            <Box className="content-story">
              <Typography variant="h3" className="section-header">Project Architecture</Typography>
              <Typography className="overview-textParagraph">
                {project.description}
              </Typography>

              <Typography variant="h3" className="section-header" sx={{ mt: 4 }}>Implementation Benchmarks</Typography>
              <Box component="ul" className="outcomes-list">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </Box>
            </Box>
          </Box>
          
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetail;