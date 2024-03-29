import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#03875b",
        },
      },
    },
  },
  palette: {
    mode: "dark",

    primary: {
      main: "#61d89f",
    },
    secondary: {
      main: "#d8619b",
    },
    background: {
      default: "#171717",
      paper: "#212121",
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 4,
});

const DarkThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
