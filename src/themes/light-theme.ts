import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[300],
    },
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#2E0B36",
    },
    error: {
      main: "#ff0000",
    },
  },
});
