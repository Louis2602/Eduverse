import { LocationOn } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AddrBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 100%;
`;

const StyledIframe = styled('iframe')`
  width: 100%;
  height: 250px;
  border: 0;
  border-radius: 10px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const FooterAddr = () => {
  return (
    <AddrBox>
      <StyledIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3390401269235!2d106.68123241528397!3d10.785323861977464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe2829fc297%3A0x62c0a3fff1ed2433!2zMTI2QSBUcuG6p24gUXXhu5FjIFRo4bqjbywgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1673974939509!5m2!1sen!2s"
        loading="lazy"
      ></StyledIframe>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          fontFamily: 'Nunito',
          fontSize: '16px',
          fontWeight: '400',
          color: 'white'
        }}
      >
        <LocationOnIcon />
        <Typography sx={{ fontWeight: '600' }}>Address</Typography>
        <Typography>227 Nguyen Van Cu, District 5, Ho Chi Minh City</Typography>
      </Box>
    </AddrBox>
  );
};

export default FooterAddr;
