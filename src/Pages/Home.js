import { Typography, Box, Paper } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "transparent", m: 0, p: 2, pt: 4, height: '100vh' }}>
      <Paper sx={{ backgroundColor: 'backgrounds.main2', m: 0, p: 2 }} elevation={12}>
        <Typography variant="h3">Home</Typography>
      </Paper>
    </Box>
  );
};

export default Home;
