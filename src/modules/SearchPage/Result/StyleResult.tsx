import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ResultLayout = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '24px',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}));

export const TopContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
}));

export const SortButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'auto',
  padding: '10px 20px',
  gap: '20px',
  background: 'rgba(185, 185, 185, 0.3)',
  borderRadius: '8px'
}));

export const SortBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  width: 'max-content'
}));

export const ResultContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '96px 128px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px'
}));
