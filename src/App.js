import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, Paper } from "@mui/material";

import theme from "./theme/theme";

import Home from "./Pages/Home";
import Calendar from "./Pages/Calendar";
import Footer from "./Components/footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ m: 0 }}>
        <Paper elevation={8} sx={{ backgroundColor: "backgrounds.main2", m: 0 }}>
          <BrowserRouter>
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
