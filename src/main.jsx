import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    secondary: {
      main: '#333333',
    },
  },
  components: { 
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Poppins, sans-serif";
          font-style: normal;
          font-weight: 400;
        }
      `,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>
)
