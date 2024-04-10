import React from 'react';
import { Box, Typography, styled } from '@mui/material';
// import { device } from '../../device';
import FooterAddr from './FooterAddr';
import FooterContact from './FooterContact';

const MyContainer = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: var(--palette-03);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 36px;
  padding: 3em 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MyCopyright = styled(Box)`
  width: 100%;
  height: 66px;
  background-color: var(--palette-01);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BorderBottom = styled(Box)`
  width: 5rem;
  height: 1px;
  background-color: white;
`;

const Footer = () => {
  return (
    <Box>
      <MyContainer>
        <FooterAddr />
        <FooterContact />
      </MyContainer>
      <MyCopyright>
        <Typography variant="body2">Copyrighted by DSC @ All rights reserved.</Typography>
      </MyCopyright>
    </Box>
  );
};

export default Footer;
