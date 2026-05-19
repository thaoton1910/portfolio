import { createTheme } from "@mui/material/styles";

// Shared typography settings
const baseTypography = {
  fontFamily: "'Lora', 'serif'",
  h1: { fontFamily: "'Cinzel', serif", fontWeight: 700 },
  h2: { fontFamily: "'Cinzel', serif", fontWeight: 600 },
  h4: { fontFamily: "'Cinzel', serif", fontWeight: 700 },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#74a12e", // Deep Matcha Green for primary headers, nav bars, and emphasis
      dark: "#4c6e1a", // A deeper shade for clean text contrast on light backgrounds
    },
    secondary: {
      main: "#fc9fb1", // Vibrant Strawberry Pink for accents, borders, and interaction states
    },
    background: {
      default: "#F9F7F2",
      paper: "#F9F7F2",
    },
    text: {
      primary: "#F9F7F2", // Dark Charcoal for main text
    }
    custom: {
      lightMatcha: "#b9dca9",
      lightStrawberry: "#fcbacb",
    },
  },
  typography: baseTypography,
});
