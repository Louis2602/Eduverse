import React from 'react';
import {
  Box,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
  Grid,
  Input,
  Select,
  OutlinedInput,
  MenuItem
} from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { LeftCover, MyLoadingButton } from '@/components';
import { useRouter } from 'next/router';
import Typography from '@/components/Typography/Typography';
import { ROUTE } from '@/common/constants/route';
import { useAuth } from '@/common/context/AuthContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const roles = ['Instructor', 'Learner'];

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [backError, setBackError] = React.useState('');

  const { error, signUp, currentUser } = useAuth();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const [err, setError] = React.useState('');
  const [user, setUser] = React.useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  React.useEffect(() => {
    if (error) {
      setInterval(() => {
        setBackError('');
      }, 5000);
      setBackError(error);
    }
  }, [error, currentUser]);

  const handleSignUp = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password, confirmPassword, fullname, role } = user;
    if (password == '' || confirmPassword == '' || email == '' || fullname == '') {
      setInterval(() => {
        setError('');
      }, 5000);
      setIsLoading(false);
      return setError('please fill All the field ');
    } else if (password !== confirmPassword) {
      setInterval(() => {
        setError('');
      }, 5000);
      setIsLoading(false);
      return setError('Password does not match');
    } else if (!(password.length >= 6) || !(confirmPassword.length >= 6)) {
      setInterval(() => {
        setError('');
      }, 5000);
      setIsLoading(false);
      return setError('Password Must be Greater then 6 Length');
    } else {
      signUp(email, password, fullname, role);
      {
        currentUser &&
          setUser({
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: ''
          });
      }
      setIsLoading(false);

      router.push(ROUTE.SIGNIN);
    }
  };
  const UserHandler = (e: any) => {
    const { name, value } = e.target;
    setUser(pre => {
      return {
        ...pre,
        [name]: value
      };
    });
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
            width: '80%',
            height: '100%',
            margin: '0 auto',
            gap: 2
          }}
        >
          {/* Title  */}
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
            <Typography fontFamily="Poppins" variant="h1" fontWeight="bold" color="var(--palette-01)">
              Create New Account
            </Typography>
            <Box
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
              }}
            >
              <Typography variant="body1" textAlign={'center'}>
                Begin your learning journey by creating a new account on our <br /> website and unlocking a world of
                knowledge
              </Typography>
            </Box>
          </Box>
          {/* Form  */}
          {err
            ? err && <p style={{ color: 'red' }}>{err}</p>
            : backError && <p style={{ color: 'red' }}>{backError}</p>}
          <Box
            component="form"
            onSubmit={handleSignUp}
            noValidate
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="email">Full name *</InputLabel>
              <Input
                id="name"
                onChange={UserHandler}
                value={user.fullname}
                type="name"
                autoFocus
                required
                fullWidth
                name="fullname"
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
              <InputLabel htmlFor="email">Email Address *</InputLabel>
              <Input
                id="email"
                type="email"
                onChange={UserHandler}
                value={user.email}
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
                onChange={UserHandler}
                value={user.password}
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
            <FormControl variant="standard" fullWidth sx={{ marginBottom: '8px' }}>
              <InputLabel htmlFor="password">Confirm Password *</InputLabel>
              <Input
                id="password"
                onChange={UserHandler}
                value={user.confirmPassword}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end" disableRipple>
                      {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
                required
                name="confirmPassword"
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
            <FormControl fullWidth>
              <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
                Choose role *
              </Typography>
              <Select
                sx={{ marginBottom: '16px' }}
                value={user.role}
                displayEmpty
                onChange={UserHandler}
                name="role"
                input={<OutlinedInput />}
                renderValue={selected => {
                  if (selected?.length === 0) {
                    return <em>Choose your role</em>;
                  }
                  return selected;
                }}
                MenuProps={MenuProps}
              >
                <MenuItem disabled value="">
                  <em>Select Your Lesson</em>
                </MenuItem>
                {roles.map(role => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <MyLoadingButton
              isLoading={isLoading}
              text="Create Account"
              loadingColor="var(--palette-04)"
              disabled={
                !user.email || !user.password || !user.confirmPassword || user.password !== user.confirmPassword
              }
            />
            <Box display="flex" alignItems="center" justifyContent="center" gap={3}>
              <Typography>Already have an account?</Typography>
              <Typography
                sx={{ fontSize: '14px', color: 'var(--palette-03)', fontWeight: 'bold', cursor: 'pointer' }}
                variant="body1"
                onClick={() => router.push(ROUTE.SIGNIN)}
              >
                Log in
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
