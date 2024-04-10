import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const MyHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '48px 128px',
  background: 'radial-gradient(4037.22% 141.42% at -0.00% 0.00%, #FFF 0%, rgba(157, 192, 139, 0.20) 54.28%, #FFF 100%)'
}));

const MyContent = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-01)',
  fontFamily: 'Poppins',
  fontSize: '42px',
  fontWeight: '700'
}));
const Header = () => {
  return (
    <MyHeader>
      <MyContent sx={{}}>Congratulation!</MyContent>
    </MyHeader>
  );
};

export default Header;
