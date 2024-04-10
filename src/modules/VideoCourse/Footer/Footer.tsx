import React from 'react';

// Mui Imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { MyButton } from '@/components';

import Link from 'next/link';
import { useRouter } from 'next/router';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FooterContainer = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FooterItem = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Footer = () => {
  const router = useRouter();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'var(--palette-02)',
        boxShadow: 'none',
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }}
    >
      <FooterContainer>
        <FooterItem>
          <IconButton size="small" disableRipple sx={{ color: 'var(--color-white)' }} onClick={() => router.back()}>
            <MenuIcon fontSize="small" />
          </IconButton>
        </FooterItem>
        <FooterItem>
          <Link href={'/video'} passHref>
            <MyButton
              variant="tertiary"
              sx={{
                color: 'var(--color-white)',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }}
              startIcon={<ArrowBackIosIcon />}
            >
              Previous
            </MyButton>
          </Link>
          <Link href={'/video'} passHref>
            <MyButton
              variant="tertiary"
              sx={{
                color: 'var(--palette-01)',
                backgroundColor: 'var(--color-white)',
                '&:hover': {
                  backgroundColor: 'var(--color-white)'
                }
              }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Next
            </MyButton>
          </Link>
        </FooterItem>
        <Box />
      </FooterContainer>
    </AppBar>
  );
};

export default Footer;
