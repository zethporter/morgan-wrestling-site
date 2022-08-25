import { Typography, Box, Paper } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "backgrounds.main4", m: 0, p: 0, height: '100vh' }}>
      <Paper sx={{ m:2, p: 2 }} elevation={2}>
        <Typography variant="h3">Home</Typography>
      </Paper>
    </Box>
  );
};

export default Home;
