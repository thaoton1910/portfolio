import React from "react";
import { Box, Container, Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useTheme } from "@mui/material/styles";

import "./Experience.css";

const Experience = () => {
  const theme = useTheme();
  const jobs = [
    {
      title: "English Tutor",
      company: "VUIHOC.vn",
      period: "Aug 2025 - Present",
      location: "Ho Chi Minh City, Vietnam",
      points: [
        "Taught English online in 1:1 and 1:4 classes for middle and primary school students via ClassIn software",
        "Conducted 16 classes every week, and each class lasted 45 minutes",
        "Provided brief feedback on student learning progress after each lesson",
      ],
    },
    {
      title: "Technical Documentation Intern",
      company: "Bosch Automotive R&D Center Vietnam",
      period: "Aug 2025 - Feb 2026",
      location: "Ho Chi Minh City, Vietnam",
      points: [
        "Aided in analyzing 10,000 technical legal requirements and texts of the Indian and Brazilian markets, relevant to product development for Bosch mobility products in two technical topic areas (Safety and Security) ",
        "Checked the new version and identified quality issues of 20+ relevant laws/regulations and standards of Brazil and Korea from the existing database",
        "Developed user-friendly resources (Docupedia and a one-pager) that streamlined the team processes",
      ],
    },
  ];

  return (
    <Box
      component="section"
      className="exp-root"
      id="experience"
      style={{
        "--primary-main": theme.palette.primary.main,
        "--primary-dark": theme.palette.primary.dark,
        "--secondary-main": theme.palette.secondary.main,
        "--text-light": theme.palette.text.light,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2" className="exp-header">
          Professional Experience
        </Typography>

        <Box className="timeline-wrapper">
          {jobs.map((job, index) => (
            <Box key={index} className="timeline-row">
              {/* 1. Date column (Desktop only - Hidden on mobile) */}
              <Box className="date-column">
                <Typography className="timeline-date">{job.period}</Typography>
                <Typography className="timeline-location">
                  {job.location}
                </Typography>
              </Box>

              {/* 2. Central line & dot */}
              <Box className="timeline-marker">
                <Box className="timeline-dot">
                  <BusinessCenterIcon sx={{ fontSize: 18, color: "#F9F7F2" }} />
                </Box>
                {index !== jobs.length - 1 && <Box className="timeline-line" />}
              </Box>

              {/* 3. Content column */}
              <Box className="timeline-content-wrapper">
                {/* Date/Location for mobile only */}
                <Box className="mobile-date-info">
                  <Typography className="timeline-date">
                    {job.period}
                  </Typography>
                  <Typography className="timeline-location">
                    {job.location}
                  </Typography>
                </Box>

                <Box className="timeline-content">
                  <Typography variant="h5" className="job-title">
                    {job.title}
                  </Typography>
                  <Typography className="job-company">{job.company}</Typography>
                  <Box component="ul" className="job-points">
                    {job.points.map((point, i) => (
                      <li key={i}>
                        {typeof point === "string" ? (
                          point
                        ) : (
                          <>
                            {point.text} (<i>e.g.,</i>{" "}
                            <a
                              href={point.linkUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="job-link"
                            >
                              {point.linkText}
                            </a>
                            )
                          </>
                        )}
                      </li>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
