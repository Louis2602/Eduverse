import React from 'react';
import {
  styled,
  Link,
  Box,
  InputLabel,
  FormControl,
  Grid,
  Input,
  CircularProgress,
  OutlinedInput
} from '@mui/material';
import { LeftCover, MyLoadingButton, MyButton } from '@/components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OtpInput from 'react-otp-input';
import Typography from '@/components/Typography/Typography';

const StyledLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  color: var(--palette-01);
  font-weight: 700;
`;
const ResetPassword = () => {
  const [newPassword, setNewPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [code, setCode] = React.useState<string>('');
  const [openCode, setOpenCode] = React.useState<boolean>(false);
  const [minutes, setMinutes] = React.useState<number>(1);
  const [seconds, setSeconds] = React.useState<number>(30);

  const handleRequestResetCode = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setOpenCode(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoading, seconds, minutes]);

  const resendCode = () => {
    setMinutes(1);
    setSeconds(30);
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
            gap: 5
          }}
        >
          {/* Typography  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="h1" fontWeight="bold" color="var(--palette-01)" fontFamily="Poppins">
              Reset Password
            </Typography>
            <Box
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '80%'
              }}
            >
              <Typography variant="body1" textAlign="center">
                Please type your new password below
              </Typography>
            </Box>
          </Box>
          {/* Form  */}
          <Box
            component="form"
            // onSubmit={handleRequestResetCode}
            noValidate
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <FormControl variant="standard" sx={{ width: '100%', margin: '0 auto' }}>
              <InputLabel htmlFor="new-password">Enter new password</InputLabel>
              <Input
                id="new-password"
                type="password"
                fullWidth
                autoFocus
                required
                value={newPassword}
                onChange={event => setNewPassword(event.target.value)}
                name="new-password"
                // autoComplete="email"
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
            <FormControl variant="standard" sx={{ width: '100%', margin: '0 auto' }}>
              <InputLabel htmlFor="confirm-password">Re-enter new password</InputLabel>
              <Input
                id="confirm-password"
                type="password"
                fullWidth
                autoFocus
                required
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
                name="confirm-password"
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
          </Box>
          {/* Button  */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <Typography variant="body2" sx={{ width: '100%' }}>
              Once you press the submit button, you will not be able to change your password for 30 days
            </Typography>
            <MyLoadingButton isLoading={isLoading} text="Submit" loadingColor="var(--palette-04)" />
          </Box>
          {/* Back to sign in  */}
          <StyledLink
            href="signin"
            variant="body1"
            sx={{
              fontSize: '16px',
              color: 'var(--palette-03)',
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              gap: 1
            }}
          >
            <ArrowBackIcon />
            Back to sign in
          </StyledLink>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ResetPassword;
