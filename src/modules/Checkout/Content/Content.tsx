import Button from '@/components/Button/Button';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography/Typography';
import { Box, Stack, styled, useMediaQuery } from '@mui/material';
import React from 'react';
import OrderItem from './OrderItem';
import PaymentMethod from './PaymentMethod';
import Summary from './Summary';

const MyWrapper = styled('div')(({ theme }) => ({
  padding: '3rem 8rem 4rem',
  display: 'flex',
  gap: '48px',
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 2rem',
    flexDirection: 'column'
  }
}));

const MyLeftContentWrapper = styled('div')(({ theme }) => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
  [theme.breakpoints.down('sm')]: {
    gap: '32px'
  }
}));

const MyRightContentWrapper = styled('div')(({ theme }) => ({
  maxWidth: '387px',
  width: '387px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

const MyEnrollBtnText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '600',
  fontFamily: 'Poppins',
  color: 'var(--palette-05)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const MyFollowBtnText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '600',
  fontFamily: 'Poppins',
  color: 'var(--palette-03)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const MyCourseBtn = styled(Button)(({ theme }) => ({
  width: '260px',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCourseImgWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  borderRadius: '16px',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCourseArchieveText = styled(Typography)(({ theme }) => ({
  color: 'var(--color-black)',
  fontSize: '12px',
  fontWeight: '500',
  [theme.breakpoints.down('sm')]: {}
}));

const MyOrderItems = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {}
}));

const MyOrderDetail = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {}
}));

const MyTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-02, #507551)',
  fontSize: '48px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const MyPrice = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '500',
  fontFamily: 'Nunito',
  color: 'var(--palette-01, #40513B)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}));
const Content = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <MyWrapper>
      <MyLeftContentWrapper>
        <MyOrderDetail>
          <MyTitle>Order details</MyTitle>
          <MyOrderItems>
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </MyOrderItems>
        </MyOrderDetail>
        <PaymentMethod />
      </MyLeftContentWrapper>

      <MyRightContentWrapper>
        <Summary></Summary>
      </MyRightContentWrapper>
    </MyWrapper>
  );
};

export default Content;
