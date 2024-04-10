import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
    fontSize: 16,
    h1: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 64,
      lineHeight: '110%'
    },
    h2: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 50,
      lineHeight: '110%'
    },
    h3: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 48,
      lineHeight: '120%'
    },
    h4: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 32,
      lineHeight: '140%'
    },
    h5: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 24,
      lineHeight: '140%'
    },
    h6: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 20,
      lineHeight: '140%'
    },
    body1: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 16,
      lineHeight: '140%'
    },
    body2: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 14,
      lineHeight: '140%'
    },
    caption: {
      fontFamily: ['Nunito', 'Poppins', 'sans-serif'].join(','),
      fontSize: 10,
      lineHeight: '110%'
    }
  }
});
