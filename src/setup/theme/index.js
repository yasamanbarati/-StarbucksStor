import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    success: {
      main: "#006341"
    },
    secondary: {
      main: "#006341"
    },
    white: {
      main: "#fff"
    }
  },
  breakpoints: {
    values: {//به بالا 
      xs: 0,
      mobileS: 320,
      mobileM: 375,
      mobileL: 425,
      sm: 576,
      tabletM: 667,
      tabletL: 768,
      md: 900,
      laptop: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Vazir',
    fontWeightLight: "400",
  },
});
