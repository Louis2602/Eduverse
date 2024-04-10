import { Box, CardActionArea, Typography, styled } from '@mui/material';
import Card from '@mui/material/Card';

export const ReasonsSection = styled(Box)(({ theme }) => ({
  marginTop: '2em',
  justifyContent: 'center',
  gap: '48px',
  padding: '96px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  background: 'radial-gradient(100% 4035.99% at 0% 0%, #FFFFFF 0%, rgba(157, 192, 139, 0.2) 54.28%, #FFFFFF 100%)',
  [theme.breakpoints.down('sm')]: {}
}));

export const MyTilte = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '56px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px'
  }
}));

export const MyCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '24px',
  alignItems: 'stretch',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

export const MyCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  gap: '8px',
  flex: '1'
}));

export const CardAction = styled(CardActionArea)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'flex-start',
  padding: '16px'
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  color: '#40513B',
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontWeight: '700',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px'
  }
}));

export const CardsContent = styled(Typography)(({ theme }) => ({
  fontFamily: 'Nunito',
  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'center',
  display: 'flex',
  gap: '8px',
  flexDirection: 'column'
}));
