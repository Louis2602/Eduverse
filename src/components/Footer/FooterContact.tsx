import { EmailOutlined, FaxOutlined, PhoneOutlined, LocationOn } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { BorderBottom } from './Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';

const InfoBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-white);
  gap: 5px;
`;

const MyAddrContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MyAddrItem = styled(Box)`
  display: flex;
  gap: 8px;
  flex-direction: column;
  text-align: center;
`;

const MyContactContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
`;

const MyContactItems = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 40px;
  color: var(--palette-06);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MySubTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const MyContent = styled(Box)`
  display: flex;
  flex-direction: column;
  font-family: Nunito;
  font-size: 14px;
  font-weight: 500;
  color: white;
  gap: 16px;
  white-space: nowrap;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
const fakeData = [
  {
    content1: 'Parturient Lorem',
    content2: 'Lorem Ornare',
    content3: 'Quam',
    content4: 'Bibendum',
    content5: 'Vestibulum'
  },
  {
    content1: 'Parturient Lorem',
    content2: 'Lorem Ornare',
    content3: 'Quam',
    content4: 'Bibendum',
    content5: 'Vestibulum'
  },
  {
    content1: 'Parturient Lorem',
    content2: 'Lorem Ornare',
    content3: 'Quam',
    content4: 'Bibendum',
    content5: 'Vestibulum'
  }
];

const FooterContact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
        width: '100%',
        maxWidth: '550px',
        height: '100%'
      }}
    >
      {/* <FooterItems /> */}
      <MyAddrContainer>
        {fakeData.map(item => (
          <MyAddrItem>
            <MySubTitle>
              <Typography
                fontSize="20px"
                color="#fff"
                fontWeight={700}
                textTransform="uppercase"
                textAlign="center"
                fontFamily="Poppins"
              >
                Subtitle
              </Typography>
              <BorderBottom />
            </MySubTitle>
            <MyContent>
              <Typography>{item.content1}</Typography>
              <Typography sx={{ fontFamily: 'Nunito', fontSize: '14px', fontWeight: '500', color: 'white' }}>
                {item.content2}
              </Typography>
              <Typography sx={{ fontFamily: 'Nunito', fontSize: '14px', fontWeight: '500', color: 'white' }}>
                {item.content3}
              </Typography>
              <Typography sx={{ fontFamily: 'Nunito', fontSize: '14px', fontWeight: '500', color: 'white' }}>
                {item.content4}
              </Typography>
              <Typography sx={{ fontFamily: 'Nunito', fontSize: '14px', fontWeight: '500', color: 'white' }}>
                {item.content5}
              </Typography>
            </MyContent>
          </MyAddrItem>
        ))}
      </MyAddrContainer>
      <MyContactContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px'
          }}
        >
          <Typography
            fontSize="20px"
            color="#fff"
            fontWeight={700}
            textTransform="uppercase"
            textAlign="center"
            fontFamily="Poppins"
          >
            Contact
          </Typography>
          <BorderBottom />
        </Box>
        <MyContactItems>
          <InfoBox>
            <FacebookIcon />
            <Link href={'https://www.facebook.com'} underline="hover" color="inherit">
              https://www.fb.com
            </Link>
          </InfoBox>
          <InfoBox>
            <FacebookIcon />
            <Link href={'https://www.facebook.com'} underline="hover" color="inherit">
              https://www.fb.com
            </Link>
          </InfoBox>
          <InfoBox>
            <FacebookIcon />
            <Link href={'https://www.facebook.com'} underline="hover" color="inherit">
              https://www.fb.com
            </Link>
          </InfoBox>
        </MyContactItems>
      </MyContactContainer>
    </Box>
  );
};

export default FooterContact;
