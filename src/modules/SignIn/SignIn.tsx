import React from 'react';
import {
  Box,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
  Grid,
  Input,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { Google, Facebook } from '@/assets';
import { MyButton, MyLoadingButton } from '@/components';
import LeftCover from '@/components/LeftCover';
import { useRouter } from 'next/router';
import Typography from '@/components/Typography/Typography';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { ROUTE } from '@/common/constants/route';
import Image from 'next/image';

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberPassword, setRememberPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const { data: session } = useSession();

  const handleSignIn = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await signIn('credentials', { email, password, redirect: false, callbackUrl: ROUTE.SIGNIN });
    if (response?.ok) {
      toast('Welcome back!', {
        position: 'top-center',
        type: 'success',
        theme: 'colored',
        autoClose: 2000
      });
      router.push(ROUTE.HOME);
      setIsLoading(false);
    } else {
      toast('Wrong username or password', {
        position: 'top-center',
        type: 'error',
        theme: 'colored',
        autoClose: 2000
      });
      setIsLoading(false);
    }
  };
  return (
    <Grid container component="main" sx={{ height: '100%' }}>
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
            gap: 4
          }}
        >
          {/* Typography  */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h1" fontWeight="bold" color="var(--palette-01)" fontFamily="Poppins">
              Welcome Back
            </Typography>
            <Typography variant="body2" textAlign="center">
              Sign in to explore our amazing online courses platform
            </Typography>
          </Box>
          {/* Form  */}
          <Box
            component="form"
            onSubmit={handleSignIn}
            noValidate
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="email">Email Address *</InputLabel>
              <Input
                id="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
                fullWidth
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
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="password">Password *</InputLabel>
              <Input
                id="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end" disableRipple>
                      {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
                required
                name="password"
                autoComplete="current-password"
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
            <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ fontSize: '14px' }}>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberPassword}
                      onClick={() => setRememberPassword(!rememberPassword)}
                      name="rememberPassword"
                    />
                  }
                  label="Remember password"
                />
              </FormControl>
              <Typography
                sx={{ fontSize: '14px', color: 'var(--palette-03)', fontWeight: 'bold', cursor: 'pointer' }}
                variant="body1"
                onClick={() => router.push(ROUTE.FORGOTPASSWORD)}
              >
                Forgot passwrod
              </Typography>
            </Box>
            <MyLoadingButton
              isLoading={isLoading}
              text="Sign In"
              loadingColor="var(--palette-04)"
              disabled={!email || !password}
            />
            <Box display="flex" alignItems="center" justifyContent="center" gap={3}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <Typography>Don't have an account?</Typography>
              <Typography
                sx={{ fontSize: '14px', color: 'var(--palette-03)', fontWeight: 'bold', cursor: 'pointer' }}
                variant="body1"
                onClick={() => router.push(ROUTE.SIGNUP)}
              >
                Sign up
              </Typography>
            </Box>
          </Box>
          <Typography fontWeight="regular" color="var(--palette-01)">
            - OR -
          </Typography>
          {/* Google - Facebook  */}
          <Box width="100%" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ position: 'relative' }}>
              <MyButton
                variant="outlined"
                onClick={() => {
                  toast('This function will be implemented soon!', {
                    position: 'top-center',
                    type: 'info',
                    theme: 'colored',
                    autoClose: 2000
                  });
                }}
                sx={{
                  p: 2,
                  width: '100%',
                  borderColor: 'var(--palette-01)',
                  '&:hover': {
                    borderColor: 'var(--palette-01)',
                    backgroundColor: 'var(--color-white)',
                    color: 'var(--color-black)',
                    opacity: '0.8'
                  }
                }}
              >
                <Image
                  src={Google}
                  alt="google"
                  style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    left: 0,
                    marginLeft: 20
                  }}
                />
                <Typography fontWeight="bold">Sign in with Google</Typography>
              </MyButton>
            </Box>
            <Box sx={{ position: 'relative' }}>
              <MyButton
                variant="outlined"
                onClick={() => {
                  toast('This function will be implemented soon!', {
                    position: 'top-center',
                    type: 'info',
                    theme: 'colored',
                    autoClose: 2000
                  });
                }}
                sx={{
                  p: 2,
                  width: '100%',
                  borderColor: 'var(--palette-01)',
                  '&:hover': {
                    borderColor: 'var(--palette-01)',
                    backgroundColor: 'var(--color-white)',
                    color: 'var(--color-black)',
                    opacity: '0.8'
                  }
                }}
              >
                <Image
                  src={Facebook}
                  alt="facebook"
                  style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    left: 0,
                    marginLeft: 20
                  }}
                />
                <Typography fontWeight="bold">Sign in with Facebook</Typography>
              </MyButton>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
