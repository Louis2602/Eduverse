import React from 'react';
import { ButtonProps as MuiButtonProps, Button as MuiButton, styled, createTheme, ThemeProvider } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    noOutlined: true;
  }
}
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' } as MuiButtonProps,
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--palette-01)',
            '&:hover': {
              backgroundColor: 'var(--palette-01)'
            }
          }
        },
        {
          props: { variant: 'secondary' } as MuiButtonProps,
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--palette-02)',
            '&:hover': {
              backgroundColor: 'var(--palette-02)'
            }
          }
        },
        {
          props: { variant: 'tertiary' } as MuiButtonProps,
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--palette-03)',
            '&:hover': {
              backgroundColor: 'var(--palette-03)'
            }
          }
        },
        {
          props: { variant: 'outlined' } as MuiButtonProps,
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-black)',
            borderColor: 'var(--palette-02)',
            '&:hover': {
              borderColor: 'transparent',
              backgroundColor: 'var(--palette-02)',
              color: 'var(--color-white)'
            }
          }
        },
        {
          props: { variant: 'noOutlined' } as MuiButtonProps,
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-black)',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }
        }
      ]
    }
  }
});

const MyButton = styled(MuiButton)`
  border-radius: 8px;
  padding: 10px 20px;
  text-transform: none;
  font-size: 16px;
  text-decoration: none;
  color: var(--color-black);
`;

const Button: React.FC<MuiButtonProps> = ({ ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <MyButton {...rest} />
    </ThemeProvider>
  );
};

export default Button;
