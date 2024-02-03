import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#61d89f',
        },
        secondary: {
            main: '#ffd54f'
        },
        background: {
            default: '#0A0A0A',
            paper: '#333333',
        }
    },
    shape: {
        borderRadius: 12,
    },
    spacing: 4,
});

const DarkThemeProvider = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;