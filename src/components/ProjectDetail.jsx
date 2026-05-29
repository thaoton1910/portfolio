import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTheme } from "@mui/material/styles";

import Contact from "./Contact";
import Navbar from "./Navbar";
import { projectData } from "../data/project-data";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const project = projectData[projectName];

  // State to track full-screen image preview lightbox asset
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectName]);

  if (!project) {
    return (
      <Box className="project-detail-root">
        <Navbar />
        <Container sx={{ py: 12, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "'Cinzel', serif", fontWeight: 700, mb: 2 }}
          >
            Project Configuration Missing
          </Typography>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 700,
              mt: 2,
              borderColor: "var(--primary-dark)",
            }}
          >
            Back to Home
          </Button>
        </Container>
      </Box>
    );
  }

  const renderEmbeddedTable = () => {
    if (!project.tableData) return null;

    const tableHasImages = project.tableData.rows.some((row) =>
      row.some(
        (cell) =>
          typeof cell === "string" &&
          /\.(jpeg|jpg|gif|png|svg|webp)$/i.test(cell),
      ),
    );

    return (
      <Box sx={{ mt: 2, mb: 3 }}>
        <TableContainer
          component={Paper}
          className={`custom-table-container ${tableHasImages ? "has-images" : ""}`}
          elevation={0}
          sx={{ border: "1px solid rgba(0,0,0,0.12)" }}
        >
          <Table size="small">
            <TableHead className="table-head-row">
              <TableRow>
                {project.tableData.headers.map((header, i) => {
                  const isImageHeader =
                    tableHasImages &&
                    i === project.tableData.headers.length - 1;
                  return (
                    <TableCell
                      key={i}
                      className={`table-header-cell ${isImageHeader ? "image-column-header" : ""}`}
                    >
                      <strong>{header}</strong>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {project.tableData.rows.map((row, rowIndex) => (
                <TableRow key={rowIndex} className="table-body-row">
                  {row.map((cell, cellIndex) => {
                    const isImage =
                      typeof cell === "string" &&
                      /\.(jpeg|jpg|gif|png|svg|webp)$/i.test(cell);

                    return (
                      <TableCell
                        key={cellIndex}
                        className={`table-body-cell ${isImage ? "image-column-cell" : ""}`}
                      >
                        {isImage ? (
                          <Box className="table-image-wrapper">
                            <img
                              src={cell}
                              alt={`Visual reference for row ${rowIndex}`}
                              className="table-inline-img"
                              onClick={() => setActiveLightboxImage(cell)}
                            />
                          </Box>
                        ) : (
                          cell
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

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

      {/* Hero Section */}
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

      {/* Main Container Layout */}
      <Container maxWidth="xl" className="detail-main-container">
        <Box className="detail-grid-layout">
          {/* Left Column: Sidebar Metadata */}
          <Box className="column-left">
            <Box className="metadata-sidebar">
              {project.timeline && (
                <>
                  <Box className="meta-block">
                    <Typography className="meta-heading">Timeline</Typography>
                    <Typography className="meta-value">
                      {project.timeline}
                    </Typography>
                  </Box>
                  <Divider className="meta-divider" />
                </>
              )}

              {project.role && (
                <>
                  <Box className="meta-block">
                    <Typography className="meta-heading">Role</Typography>
                    <Typography className="meta-value">
                      {project.role}
                    </Typography>
                  </Box>
                  <Divider className="meta-divider" />
                </>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <>
                  <Box className="meta-block">
                    <Typography className="meta-heading">
                      Stack Tools
                    </Typography>
                    <Box className="tech-chip-grid">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </Box>
                  </Box>
                </>
              )}

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

          {/* Right Column: Narrative Canvas content */}
          <Box className="column-right">
            <Box className="content-story">
              {project.overview && (
                <>
                  <Typography variant="h3" className="section-header">
                    Overview
                  </Typography>
                  <Typography className="overview-textParagraph">
                    {project.overview}
                  </Typography>
                </>
              )}

              {project.details && project.details.length > 0 && (
                <>
                  <Typography
                    variant="h3"
                    className="section-header"
                    sx={{ mt: 4 }}
                  >
                    Features
                  </Typography>
                  <Box component="ul" className="outcomes-list">
                    {project.details.map((detail, index) => (
                      <li key={index} className="nested-list-parent">
                        <Typography className="list-main-text">
                          {detail.main}
                        </Typography>

                        {/* Standard Level 2 sub-bullets */}
                        {detail.subDetails && detail.subDetails.length > 0 && (
                          <Box
                            component="ul"
                            className="nested-sub-list"
                            sx={{ mt: 1, mb: 1 }}
                          >
                            {detail.subDetails.map((sub, subIndex) => {
                              const isSubObject =
                                typeof sub === "object" && sub !== null;
                              const subTextValue = isSubObject ? sub.text : sub;
                              const renderSubTable =
                                isSubObject && sub.hasEmbeddedTable;

                              return (
                                <li key={subIndex}>
                                  <Typography variant="body2">
                                    {subTextValue}
                                  </Typography>

                                  {/* NESTED SUB-TABLE ACTION ENGINE */}
                                  {renderSubTable && renderEmbeddedTable()}

                                  {/* Level 3 Deep Nested Loop */}
                                  {isSubObject &&
                                    sub.deepDetails &&
                                    sub.deepDetails.length > 0 && (
                                      <Box
                                        component="ul"
                                        className="deep-nested-sub-list"
                                        sx={{ mt: 1, mb: 1 }}
                                      >
                                        {sub.deepDetails.map(
                                          (deep, deepIdx) => (
                                            <li key={deepIdx}>
                                              <Typography variant="body2">
                                                {deep}
                                              </Typography>
                                            </li>
                                          ),
                                        )}
                                      </Box>
                                    )}
                                </li>
                              );
                            })}
                          </Box>
                        )}

                        {/* Table injection directly under main parent list item if flagged */}
                        {detail.hasEmbeddedTable && renderEmbeddedTable()}
                      </li>
                    ))}
                  </Box>
                </>
              )}

              {/* Benchmarks Section */}
              {project.results && (
                <Box sx={{ mt: 5 }}>
                  <Typography variant="h3" className="section-header">
                    Results
                  </Typography>
                  <Box component="ul" className="outcomes-list">
                    {project.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Dynamic Bill of Materials Components Section */}
              {project.componentsList && (
                <Box sx={{ mt: 4, width: "100%" }}>
                  <Typography variant="h3" className="section-header">
                    Components
                  </Typography>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                      gap: "24px",
                      mt: 2,
                      width: "100%",
                    }}
                  >
                    {Object.entries(project.componentsList).map(
                      ([category, items]) => (
                        <Paper
                          key={category}
                          elevation={0}
                          className="component-category-card"
                        >
                          <Typography className="component-category-title">
                            {category}
                          </Typography>
                          <Box component="ul" className="component-items-ul">
                            {items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </Box>
                        </Paper>
                      ),
                    )}
                  </Box>
                </Box>
              )}

              {/* Dynamic Image Blueprint Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <Box sx={{ mt: 6 }}>
                  <Typography variant="h3" className="section-header">
                    Gallery
                  </Typography>

                  <Masonry
                    columns={{ xs: 1, sm: 2 }}
                    spacing={2}
                    sx={{ mt: 3, mx: 0, width: "100%" }}
                  >
                    {project.gallery.map((item, index) => (
                      <Box
                        key={index}
                        className="gallery-card"
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          breakInside: "avoid",
                        }}
                      >
                        <img
                          src={item.url}
                          alt={item.label}
                          className="gallery-img"
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                        <Typography className="gallery-label">
                          {item.label}
                        </Typography>
                      </Box>
                    ))}
                  </Masonry>
                </Box>
              )}

              {/* Dynamic Video Player Frame Grid */}
              {project.youtubeIds && project.youtubeIds.length > 0 && (
                <Box sx={{ mt: 6, mb: 4 }}>
                  <Typography variant="h3" className="section-header">
                    Demonstrations
                  </Typography>
                  <Box className="videos-grid-container">
                    {project.youtubeIds.map((id, idx) => (
                      <Box key={idx} className="video-responsive-wrapper">
                        <iframe
                          width="853"
                          height="480"
                          src={`https://www.youtube.com/embed/${id}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`Project Test Validation Run - Video ${idx + 1}`}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Dynamic References Component */}
              {project.references && project.references.length > 0 && (
                <Box sx={{ mt: 6, pt: 2 }}>
                  <Typography variant="h4" className="references-header">
                    References
                  </Typography>
                  <Box className="references-block">
                    {project.references.map((ref, idx) => (
                      <Typography key={idx} className="reference-citation-text">
                        {ref.authorsAndYear} {ref.title}{" "}
                        {ref.publication && (
                          <em className="citation-publication">
                            {ref.publication}
                          </em>
                        )}
                        {ref.link && (
                          <>
                            {" "}
                            <a
                              href={ref.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation-retrieval-link"
                            >
                              {ref.link}
                            </a>
                          </>
                        )}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Global Interactive Cinema Lightbox view overlay */}
      {activeLightboxImage && (
        <Box
          className="lightbox-overlay"
          onClick={() => setActiveLightboxImage(null)}
        >
          <button
            className="lightbox-close-btn"
            onClick={() => setActiveLightboxImage(null)}
          >
            &times;
          </button>
          <Box
            className="lightbox-content-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeLightboxImage}
              alt="Fullscreen preview"
              className="lightbox-scaled-image"
            />
          </Box>
        </Box>
      )}

      <Box id="contact" component="footer">
        <Contact />
      </Box>
    </Box>
  );
};

export default ProjectDetail;
