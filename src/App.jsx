import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { theme } from "./theme";

import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
