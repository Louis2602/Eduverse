import { Box, CardActionArea, Typography, styled } from '@mui/material';

export const PopularSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '96px',
  alignItems: 'center',
  gap: '48px',
  background: 'radial-gradient(100% 4035.99% at 0% 0%, #FFFFFF 0%, rgba(157, 192, 139, 0.2) 54.28%, #FFFFFF 100%)'
}));

export const MyTilte = styled(Typography)(({ theme }) => ({}));

export const Title = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-03)',
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontWeight: '600',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px'
  }
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-01)',
  fontFamily: 'Poppins',
  fontSize: '56px',
  fontWeight: '700',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px'
  }
}));

export const MyCardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '48px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}));

export const ButtonContent = styled(Typography)(({ theme }) => ({
  fontFamily: 'Nunito',
  fontSize: '20px',
  fontWeight: '600',
  textAlign: 'center',
  color: 'white'
}));
