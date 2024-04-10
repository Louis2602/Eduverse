import { MyButton } from '@/components';
import styled from '@emotion/styled';
import { Box, TextField, Typography } from '@mui/material';

const MyMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '48px 96px'
}));

const Main = () => {
  return (
    <MyMain>
      <Box
        sx={{
          display: 'flex',
          width: '50%',
          gap: '16px',
          flexDirection: 'column'
        }}
      >
        <Typography
          sx={{ color: 'black', fontFamily: 'Poppins', fontSize: '40px', fontWeight: '700', textAlign: 'center' }}
        >
          You have just finished <span style={{ color: 'green' }}>Photoshop for beginner course!</span>
        </Typography>
        <Typography sx={{ fontFamily: 'Nunito', fontSize: '20px', fontWeight: '600' }}>
          Kindly provide your complete information once more to facilitate the generation of your certification!
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography sx={{ fontFamily: 'Nunito', fontSize: '16px', fontWeight: '700' }}>Enter your name *</Typography>
          <TextField required id="outlined-required" label="Required" sx={{ width: '100%' }} />
        </Box>
        <Typography sx={{ fontFamily: 'Nunito', fontSize: '14px', fontWeight: '500' }}>
          Please verify your full name, as it will be displayed on the certification.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography sx={{ fontFamily: 'Nunito', fontSize: '16px', fontWeight: '700' }}>Enter your email *</Typography>
          <TextField required id="outlined-required" label="Required" sx={{ width: '100%' }} />
        </Box>
        <Typography sx={{ fontFamily: 'Nunito', fontSize: '14px', fontWeight: '500' }}>
          Please confirm your email address, as we will be sending you the link to access your certification and a PDF
          version for long-term storage.
        </Typography>
        <MyButton
          variant="secondary"
          sx={{ width: '100%', display: 'flex', gap: '12px', justifyContent: 'center', justifyItems: 'center' }}
        >
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: '600', color: 'var(--palette-05)' }}>
            Confirm and get certification
          </Typography>
        </MyButton>
      </Box>
    </MyMain>
  );
};

export default Main;
