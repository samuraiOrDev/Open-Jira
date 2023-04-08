import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#efb810",
    },
    secondary: {
      main: "#2E0B36",
    },
    error: {
      main: "#ff0000",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: {
        root: {
          backgroundColor: "#2E0B36",
        },
      },
    },
  },
});
