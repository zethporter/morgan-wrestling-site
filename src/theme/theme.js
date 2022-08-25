import { createTheme } from '@mui/material/styles'
import { cyan, pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#53101A",
    },
    secondary: {
      main: "#FCBA04",
    },
    backgrounds: {
      main: "#fdf6f7",
      main2: "#fae5e8",
      main3: "#f7d4d9",
      main4: "#f3c3ca",
      main5: "#f0b2bb"
    },
    darks: {
      dark1: "#090203",
      dark2: "#1a0508",
      dark3: "#2b080d",
      dark4: "#3c0c13",
      dark5: "#3c0c13",
    }
  },
  components: {
    MuiPaper: {
      palette: ({ theme }) => ({
        primary: theme.palette.primary.main,
      }),
    },
  },
});

export default theme;