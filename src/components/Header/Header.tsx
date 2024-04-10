import React from 'react';
import { AppBar, Toolbar, Box, IconButton, styled, useMediaQuery, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import { INavContent, NavbarItems } from './HeaderData';
import Link from 'next/link';
import { MyButton } from '@/components';
import { useRouter } from 'next/router';
import { ROUTE } from '@/common/constants/route';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import LogoImg from '@/assets/home_page/Logo.png';
import { signOut, useSession } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderContainer = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HeaderItem = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Header = () => {
  const router = useRouter();
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'var(--color-white)',
        boxShadow: 'none',
        padding: '10px 0'
      }}
    >
      <HeaderContainer>
        {/* Logo */}
        <HeaderItem>
          {isSmallScreen && (
            <IconButton size="large" edge="start" sx={{ mr: 2, color: 'var(--color-black)' }} disableRipple>
              <MenuIcon />
            </IconButton>
          )}
          <Link href="/">
            <Image src={LogoImg} height={36} width={177} alt="logo" />
          </Link>
        </HeaderItem>
        {/* NavItem */}
        <HeaderItem>
          {NavbarItems.map((item: INavContent) => (
            <Link href={`${item.slug}`} key={item.slug}>
              <Typography fontFamily="Nunito" color="var(--color-black)" sx={{ px: 2 }} fontWeight="bold">
                {item.name}
              </Typography>
            </Link>
          ))}
          <SearchIcon
            sx={{ color: 'var(--color-black)', fontFamily: 'Nunito', cursor: 'pointer' }}
            onClick={() => router.push('/search-page')}
          />
        </HeaderItem>
        {/* Authentication */}
        <>
          {session ? (
            <HeaderItem>
              {session?.user.role === 'Instructor' ? (
                <>
                  <>
                    <IconButton onClick={handleMenu}>
                      <AccountCircleIcon sx={{ fontSize: '36px' }} />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={() => router.push('/user-profile')}>Profile</MenuItem>
                    </Menu>
                  </>
                  <MyButton
                    variant="primary"
                    onClick={() => {
                      router.push('/dashboard');
                    }}
                  >
                    <Typography fontFamily="Nunito" color="var(--color-white)" fontWeight="bold">
                      Dashboard
                    </Typography>
                  </MyButton>
                </>
              ) : (
                <>
                  <IconButton onClick={handleMenu}>
                    <AccountCircleIcon sx={{ fontSize: '36px' }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => router.push('/user-profile')}>Profile</MenuItem>
                  </Menu>
                </>
              )}
              <MyButton
                variant="primary"
                onClick={() => {
                  signOut();
                }}
              >
                <Typography fontFamily="Nunito" color="var(--color-white)" fontWeight="bold">
                  Log out
                </Typography>
              </MyButton>
            </HeaderItem>
          ) : (
            <HeaderItem>
              <Link href={ROUTE.SIGNUP} passHref>
                <Typography fontFamily="Nunito" color="var(--color-black)">
                  Register
                </Typography>
              </Link>
              <MyButton variant="outlined" onClick={() => router.push(ROUTE.SIGNIN)}>
                Sign In
              </MyButton>
            </HeaderItem>
          )}
        </>
      </HeaderContainer>
    </AppBar>
  );
};

export default Header;
