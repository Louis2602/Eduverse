import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const SearchBarBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '24px',
  alignSelf: 'stretch',
  background: 'radial-gradient(4037.22% 141.42% at -0.00% 0.00%, #FFF 0%, rgba(157, 192, 139, 0.20) 54.28%, #FFF 100%)'
}));

export const SearchBarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  alignItems: 'flex-start',
  marginTop: 0,
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    marginTop: '100px'
  }
}));

export const Search = styled(Box)(({ theme }) => ({
  width: '500px',
  display: 'flex',
  flexDirection: 'row-reverse',
  padding: '18px 36px',
  borderRadius: '8px',
  justifyContent: 'space-between',
  background: '#FFF'
}));
