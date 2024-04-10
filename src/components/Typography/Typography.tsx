import { Typography as MuiTypography, TypographyProps as MuiTypographyProps, styled } from '@mui/material';

const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800
};

const FONT_SIZE = {
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '36px',
  xl3: '48px'
};

const EMPHASIS = {
  disabled: 0.3,
  medium: 0.6,
  high: 0.87
};

interface TypographyProps extends MuiTypographyProps {
  fontWeight?: keyof typeof FONT_WEIGHT;
  fontSize?: keyof typeof FONT_SIZE;
  emphasis?: keyof typeof EMPHASIS;
}

const Typography: React.FC<TypographyProps> = ({
  fontWeight = 'initial',
  emphasis = '',
  fontSize,
  children,
  ...rest
}) => {
  return (
    <MuiTypography
      {...rest}
      style={{
        fontWeight: FONT_WEIGHT[fontWeight as keyof typeof FONT_WEIGHT],
        fontSize: FONT_SIZE[fontSize as keyof typeof FONT_SIZE],
        opacity: EMPHASIS[emphasis as keyof typeof EMPHASIS],
        ...rest.style
      }}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
