import Icon from '@/components/Icon';
import Typography from '@/components/Typography/Typography';
import { Breadcrumbs, Rating, Stack, styled } from '@mui/material';
import React from 'react';

const MyBackground = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '3rem 8rem',
  background: 'radial-gradient(4037.22% 141.42% at -0.00% 0.00%, #FFF 0%, rgba(157, 192, 139, 0.20) 54.28%, #FFF 100%)',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem'
  }
}));

const MyBreadCrumbsText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  color: 'var(--palette-01)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const MyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  color: 'var(--palette-01)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px'
  }
}));

const Header = () => {
  return (
    <MyBackground>
      <Breadcrumbs separator={<Icon.Dots />} aria-label="breadcrumb">
        <MyBreadCrumbsText>Courses</MyBreadCrumbsText>
        <MyBreadCrumbsText>UI Design</MyBreadCrumbsText>
        <MyBreadCrumbsText>Photoshop</MyBreadCrumbsText>
        <MyBreadCrumbsText>Enrolling</MyBreadCrumbsText>
      </Breadcrumbs>
      <MyTitle>Checkout</MyTitle>
    </MyBackground>
  );
};

export default Header;
