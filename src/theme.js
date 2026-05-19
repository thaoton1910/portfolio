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
      main: "#A2BA5E", // Deep Matcha Green for primary headers, nav bars, and emphasis
      dark: "#789048", // A deeper shade for clean text contrast on light backgrounds
    },
    secondary: {
      main: "#FEADBB", // Vibrant Strawberry Pink for accents, borders, and interaction states
    },
    background: {
      default: "#F9F7F2",
      paper: "#F9F7F2",
    },
    text: {
      light: "#F9F7F2",
      dark: "#333333",
    },
    custom: {
      lightMatcha: "#b9dca9",
      lightStrawberry: "#f4c7d0",
    },
  },
  typography: baseTypography,
});
