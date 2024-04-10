import React from 'react';
import { Box, IconButton, Input, InputAdornment, OutlinedInput, styled, useMediaQuery } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Title from '../components/Title/Title';

const MyInput = styled(OutlinedInput)({
  borderRadius: '8px',
  height: '74px',
  width: '100%',
  background: '#FFFFFF',
  padding: '0 24px',
  fontSize: '20px'
});

const MyWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  padding: '96px',
  background: 'radial-gradient(100% 4035.99% at 0% 0%, #FFFFFF 0%, rgba(157, 192, 139, 0.2) 54.28%, #FFFFFF 100%)',
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: 'none'
    }
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 2rem'
  }
}));

const IconWrapper = styled(IconButton)({
  position: 'absolute',
  right: '1rem',
  height: '100%',
  rotate: '-50deg'
});

const SubscribeContainer = styled(Box)({
  marginTop: '3rem',
  position: 'relative'
});

const NewsLetter = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = async () => {
    console.log(email);
    // Handle push email to database in firebase
  };

  return (
    <MyWrapper>
      <Box>
        <Title title="SUBSCRIBE NEWSLETTER" subtitle="Get Every Latest News" />
        <SubscribeContainer>
          <MyInput placeholder="Enter your email address" onChange={_email => setEmail(_email)} />
          <IconWrapper onClick={handleSubscribe} disableRipple>
            <SendOutlinedIcon />
          </IconWrapper>
        </SubscribeContainer>
      </Box>
    </MyWrapper>
  );
};

export default NewsLetter;
