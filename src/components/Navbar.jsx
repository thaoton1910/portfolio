import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the user is on a Project Detail page
  const isDetailPage = location.pathname.startsWith("/projects/");

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
      className="navbar-root"
      style={{
        "--primary-main": theme.palette.primary.main,
        "--primary-dark": theme.palette.primary.dark,
        "--secondary-main": theme.palette.secondary.main,
        "--nav-text": theme.palette.text.dark,
        "--light-matcha": theme.palette.custom.lightMatcha,
        "--light-strawberry": theme.palette.custom.lightStrawberry,
        backgroundColor: "var(--primary-main)",
      }}
    >
      <Box sx={{ width: "100%", px: { xs: 2, md: 4 } }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            className="nav-brand"
            sx={{ flexGrow: 1, cursor: isDetailPage ? "pointer" : "default" }}
            onClick={() => isDetailPage && navigate("/")}
          >
            Ton Nu Thanh Thao
          </Typography>

          {/* Dynamic Navigation Bar Between Home and Project Detail Pages */}
          {isDetailPage ? (
            /* 1. Back arrow displayed on Project Detail Pages */
            <Button
              color="inherit"
              className="nav-link back-link-btn"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate("/")}
              sx={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}
            >
              {/* Hide on mobile */}
              <Box
                component="span"
                sx={{ display: { xs: "none", md: "inline" } }}
              >
                Back to Home
              </Box>
            </Button>
          ) : (
            /* 2. Full menus for the Home Page */
            <>
              {/* Desktop Menu */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    color="inherit"
                    className="nav-link"
                    component="a"
                    href={`#${item.id}`}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Mobile Hamburger */}
              <IconButton
                aria-label="Open Drawer"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: "none" },
                  color: "var(--nav-text) !important",
                }}
              >
                <MenuIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </Box>

      {/* Mobile Drawer (Only active on Home Page) */}
      {!isDetailPage && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          slotProps={{
            paper: {
              sx: {
                bgcolor: "primary.main",
                color: theme.palette.text.dark,
                width: 150,
                borderLeft: `3px solid ${theme.palette.secondary.main}`,
              },
            },
          }}
        >
          <Box sx={{ pt: 2 }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    onClick={handleDrawerToggle}
                    sx={{ py: 1.5 }}
                    component="a"
                    href={`#${item.id}`}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        className: "nav-link",
                        textAlign: "center",
                        variant: "body1",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </AppBar>
  );
};

export default Navbar;
