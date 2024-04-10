import { Blur1, Blur2, Student } from '@/assets';
import { MyButton, MyContainer } from '@/components';
import { Box, Fab, useMediaQuery } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import Typography from '@/components/Typography/Typography';

const HeroSection = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  return (
    <MyContainer
      sx={{
        alignItems: 'flex-start',
        marginBottom: '80px',
        position: 'relative'
      }}
    >
      {!isSmallScreen && (
        <Image
          src={Blur2}
          height={600}
          width={400}
          alt="blur-2"
          style={{
            position: 'absolute',
            filter: 'blur(50px)',
            top: '-120px',
            left: '-80px',
            zIndex: 999,
            overflow: 'hidden'
          }}
        />
      )}
      <Box sx={{ mt: '128px' }}>
        <Typography
          fontFamily="Poppins"
          fontWeight="bold"
          fontSize="lg"
          color="var(--palette-03)"
          sx={{ textTransform: 'uppercase' }}
          gutterBottom
        >
          Eduverse
        </Typography>
        <Box sx={{ mb: '16px' }}>
          <Typography fontFamily="Poppins" fontWeight="bold" fontSize="xl3" color="var(--palette-01)">
            Knowledge Transformed,
          </Typography>
          <Typography fontFamily="Poppins" fontWeight="bold" fontSize="xl3" color="var(--palette-01)">
            Futures Defined!
          </Typography>
        </Box>
        <Typography
          fontFamily="Poppins"
          fontWeight="medium"
          fontSize="md"
          color="var(--color-black)"
          sx={{ mb: '24px' }}
        >
          Embrace a world of learning opportunities, completely{' '}
          <span style={{ color: 'var(--palette-03)' }}>free of charge</span> to begin!
        </Typography>
        <MyButton variant="tertiary" sx={{ color: 'var(--palette-05)' }} endIcon={<ArrowForward />}>
          Explore now
        </MyButton>
      </Box>
      {!isSmallScreen && (
        <Box sx={{ position: 'relative' }}>
          <Box>
            <Image
              src={Blur1}
              height={600}
              width={500}
              alt="blur-1"
              style={{ filter: 'blur(30px)', position: 'absolute', right: '-80px', bottom: '-20px' }}
            />
            <Image src={Student} width={646} height={679} alt="student" style={{ position: 'relative' }} />
          </Box>

          <Box
            sx={{
              border: '6px solid var(--palette-02)',
              width: 153,
              height: 178,
              borderRadius: '16px',
              display: 'flex',
              gap: '8px',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px',
              position: 'absolute',
              bottom: '97px',
              left: '74px',
              background: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <Typography fontWeight="bold" fontSize="xxl" color="var(--palette-01)">
              25k+
            </Typography>
            <Typography fontWeight="medium" fontSize="md">
              Enrolled Learner
            </Typography>
          </Box>
          <Box
            sx={{
              border: '6px solid var(--palette-02)',
              width: 148,
              height: 150,
              gap: '8px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px',
              position: 'absolute',
              top: '45px',
              right: '19px',
              background: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <Typography fontWeight="bold" fontSize="xxl" color="var(--palette-01)">
              100+
            </Typography>
            <Typography fontWeight="medium" fontSize="md">
              Courses
            </Typography>
          </Box>
        </Box>
      )}
      <Box sx={{ position: 'absolute', bottom: isSmallScreen ? '-80px' : 0, margin: '0 auto', zIndex: 999 }}>
        <Fab
          size="small"
          onClick={() => window.scrollTo(0, 0)}
          sx={{
            backgroundColor: '#9DC08BB2',
            color: 'var(--color-white)',
            transition: '200ms all ease-in-out',
            '&:hover': {
              backgroundColor: '#9DC08BB2'
            }
          }}
        >
          <KeyboardArrowDown />
        </Fab>
      </Box>
    </MyContainer>
  );
};

export default HeroSection;
