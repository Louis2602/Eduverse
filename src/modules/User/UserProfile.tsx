import { MainLayout } from '@/components';
import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSession } from 'next-auth/react';
import React from 'react';

const Wrapper = styled(Box)`
  padding: 32px;
  margin: 32px;
  border: 1px solid #ccc;
  border-radius: 16px;
`;

const StyledTypography = styled(Typography)`
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 12px;
`;

const UserProfile = () => {
  const { data: session } = useSession();
  return (
    <MainLayout>
      <Wrapper>
        <Box marginBottom={4}>
          <Typography
            fontSize="36px"
            sx={{ color: 'var(--palette-01)' }}
            fontFamily="Poppins"
            fontWeight="medium"
            gutterBottom
          >
            User Profile
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Username *
          </Typography>
          <StyledTypography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            {session?.user.name}
          </StyledTypography>
        </Box>
        <Box marginBottom={4}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Email *
          </Typography>
          <StyledTypography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            {session?.user.email}
          </StyledTypography>
        </Box>
        <Box>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Role *
          </Typography>
          <StyledTypography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            {session?.user.role}
          </StyledTypography>
        </Box>
      </Wrapper>
    </MainLayout>
  );
};

export default UserProfile;
