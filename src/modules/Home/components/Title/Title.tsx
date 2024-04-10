import Typography from '@/components/Typography/Typography';
import { styled } from '@mui/material';
import React from 'react';

interface TitleProps {
  title: string;
  subtitle: string;
}

const MyWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px'
}));

const MyTilte = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-03)',
  fontWeight: '600',
  fontFamily: 'Poppins',
  fontSize: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    textAlign: 'center'
  }
}));

const MySubTilte = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-01)',
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '56px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px',
    textAlign: 'center'
  }
}));

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <MyWrapper>
      <MyTilte>{title}</MyTilte>
      <MySubTilte>{subtitle}</MySubTilte>
    </MyWrapper>
  );
};

export default Title;
