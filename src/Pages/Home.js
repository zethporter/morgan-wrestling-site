import React from 'react';
import { Typography, Box, Paper, Grid } from "@mui/material";
import Calendar from './Calendar';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "transparent", m: 0, pt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ backgroundColor: 'backgrounds.main1', m: 0, p: 2 }} elevation={12}>
            <Typography variant="h3">Home</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
            <Calendar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
