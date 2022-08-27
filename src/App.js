import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, Paper } from "@mui/material";

import theme from "./theme/theme";

import Home from "./Pages/Home";
import NavTabs from './Components/NavTabs'
import Calendar from "./Pages/Calendar";
import Footer from "./Components/footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ m: 0 }}>
        <Paper elevation={8} sx={{ backgroundColor: "backgrounds.main1", m: 0, p: 3 }}>
          <BrowserRouter>
            <Box sx={{ m: 0 }} >
              <NavTabs />
            </Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </BrowserRouter>
        </Paper>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
