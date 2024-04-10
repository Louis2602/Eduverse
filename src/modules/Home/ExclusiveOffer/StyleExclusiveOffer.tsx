import Button from '@/components/Button/Button';
import Typography from '@/components/Typography/Typography';
import { styled } from '@mui/material';

export const MyDiscountText = styled('span')(({ theme }) => ({
  fontWeight: 700,
  color: 'var(--palette-02)',
  fontSize: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
}));

export const MyDescription = styled('div')`
  max-width: 742px;
  text-align: center;
`;

export const MyCard = styled('div')(({ theme }) => ({
  width: '160px',
  height: '165px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '32px',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
  borderRadius: '16px',
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '105px',
    padding: '16px',
    gap: 0
  }
}));

export const MyContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '32px',
  padding: '128px 0',
  [theme.breakpoints.down('sm')]: {
    gap: '16px',
    padding: '48px 32px'
  }
}));

export const MyTimeCardWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '32px',
  [theme.breakpoints.down('sm')]: {
    gap: '16px'
  }
}));

export const MyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '64px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px'
  }
}));

export const MyCardValueText = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px'
  }
}));

export const MyCardTypeText = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
}));

export const MySubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px'
  }
}));

export const MyTitleWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    gap: '4px'
  }
}));

export const MyBtnContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}));

export const MyClaimBtn = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: {
    padding: '12px 16px'
  }
}));

export const MyClaimText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
}));

export const MyDescText = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
}));
