import Typography from '@/components/Typography/Typography';
import { Box, styled } from '@mui/material';

const MyPrice = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '500',
  fontFamily: 'Nunito',
  color: 'var(--palette-01, #40513B)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}));

const MyOrderItem = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  justifyItems: 'center',
  padding: '16px',
  borderBottom: '1px solid #929292',
  '&:last-child': {
    border: 'None'
  },
  [theme.breakpoints.down('sm')]: {}
}));

const MyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  color: 'var(--palette-01, #40513B)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}));

const OrderItem = () => {
  return (
    <MyOrderItem>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Box sx={{ width: '32px', height: '32px', backgroundColor: 'red' }}></Box>
        <MyTitle>Photoshop for Beginner</MyTitle>
      </Box>
      <MyPrice>$49.00</MyPrice>
    </MyOrderItem>
  );
};

export default OrderItem;
