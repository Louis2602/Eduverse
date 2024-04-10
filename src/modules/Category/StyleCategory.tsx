import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const CategoryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '48px 128px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  background: 'radial-gradient(4037.22% 141.42% at -0.00% 0.00%, #FFF 0%, rgba(157, 192, 139, 0.20) 54.28%, #FFF 100%)'
}));
