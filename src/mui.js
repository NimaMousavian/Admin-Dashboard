import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#7b3efb",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    accent: {
      main: "#4dd2ff",
      contrastText: "#002633",
    },
    success: {
      main: "#28a428",
      contrastText: "#fff",
    },
  },
});
export default theme;
