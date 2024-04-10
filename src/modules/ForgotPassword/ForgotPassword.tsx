import React from 'react';
import { Box, InputLabel, FormControl, Grid, Input } from '@mui/material';
import { LeftCover, MyLoadingButton } from '@/components';
import Typography from '@/components/Typography/Typography';
import { useRouter } from 'next/router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/config/firebase.config';
import { toast } from 'react-toastify';
import { ROUTE } from '@/common/constants/route';

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleRequestResetCode = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast('Please check your email!', {
          position: 'top-center',
          type: 'success',
          theme: 'colored',
          autoClose: 2000
        });
        router.push(ROUTE.SIGNIN);
      })
      .catch(error => {
        toast('Reset password failed!', {
          position: 'top-center',
          type: 'error',
          theme: 'colored',
          autoClose: 2000
        });
      });
    setIsLoading(false);
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={false} sm={6}>
        <LeftCover />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%',
            height: '100%',
            margin: '0 auto',
            gap: 2
          }}
        >
          {/* Title  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="h1"
              fontWeight="bold"
              color="var(--palette-01)"
              sx={{ textAlign: 'center' }}
              fontFamily="Poppins"
            >
              Forgot Password?
            </Typography>
            <Box
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
              }}
            >
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Please enter the email address you’d like your password reset <br /> information sent to
              </Typography>
            </Box>
          </Box>
          {/* Form  */}
          <Box
            component="form"
            onSubmit={handleRequestResetCode}
            noValidate
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}
          >
            <FormControl variant="standard" sx={{ width: '100%', margin: '0 auto' }}>
              <InputLabel htmlFor="email" sx={{ fontSize: '14px' }}>
                Enter email address
              </InputLabel>
              <Input
                id="email"
                type="email"
                fullWidth
                autoFocus
                required
                value={email}
                onChange={event => setEmail(event.target.value)}
                name="email"
                autoComplete="email"
                sx={{
                  ':before': {
                    borderBottomColor: 'var(--palette-02)'
                  },
                  ':after': {
                    borderBottomColor: 'var(--palette-02)'
                  }
                }}
              />
            </FormControl>
            <MyLoadingButton
              isLoading={isLoading}
              text="Request reset code"
              loadingColor="var(--palette-04)"
              disabled={!email}
            />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                sx={{ fontSize: '14px', color: 'var(--palette-03)', fontWeight: 'bold', cursor: 'pointer' }}
                variant="body1"
                onClick={() => router.push(ROUTE.SIGNIN)}
              >
                Back to sign in
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
