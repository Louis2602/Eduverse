import { CardActionArea, Typography, styled } from '@mui/material';
import { Box } from '@mui/material';

export const CoursesCategories = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '96px',
  gap: '48px'
}));

export const TopicsContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}));

export const MyCard = styled('div')(({ theme }) => ({
  borderRadius: '8px',
  gap: '8px',
  flex: '1',
  minHeight: '264px',
  background: 'rgba(157, 192, 139, 0.2);',
  ':hover': { background: 'rgba(157, 192, 139, 0.6);' }
}));

export const CardAction = styled(CardActionArea)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  padding: '36px'
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  color: '#40513B',
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontWeight: '700',
  textAlign: 'center'
}));

export const CardsContent = styled(Typography)(({ theme }) => ({
  fontFamily: 'Nunito',
  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'center'
}));

export const ButtonContent = styled(Typography)(({ theme }) => ({
  fontFamily: 'Nunito',
  fontSize: '20px',
  fontWeight: '600',
  textAlign: 'center',
  color: 'white'
}));
