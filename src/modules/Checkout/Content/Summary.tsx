import { MyLoadingButton } from '@/components';
import Button from '@/components/Button/Button';
import Typography from '@/components/Typography/Typography';
import { Box, Divider, styled } from '@mui/material';

const MyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  color: 'var(--palette-02, #507551)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}));

const MyText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '500',
  fontFamily: 'Poppins',
  color: 'var(--palette-01, #40513B)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}));

const Total = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  color: 'var(--palette-01, #40513B)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px'
  }
}));

const Summary = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <MyTitle>Summary</MyTitle>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyText>Original Price:</MyText>
        <MyText>$49.00</MyText>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyText>Discount:</MyText>
        <MyText>$10.00</MyText>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Total>Discount:</Total>
        <Total>$39.00</Total>
      </Box>
      <Typography>
        By completing your purchase you agree to these <Typography fontWeight="bold">Terms of Service.</Typography>
      </Typography>
      <Box
        sx={{
          padding: '16px 32px',
          background: 'var(--palette-03, #609966)',
          borderRadius: '8px',
          textAlign: 'center'
        }}
      >
        <Typography fontFamily="Poppins" fontSize="lg" fontWeight="semiBold" color="var(--palette-05, #EDF1D6)">
          Complete Check
        </Typography>
      </Box>
      <Box
        sx={{
          padding: '16px 32px',
          borderRadius: '8px',
          textAlign: 'center',
          border: '1px solid var(--palette-03, #609966)'
        }}
      >
        <Typography fontFamily="Poppins" fontSize="lg" fontWeight="semiBold" color="var(--palette-03, #609966)">
          Cancel
        </Typography>
      </Box>
    </Box>
  );
};

export default Summary;
