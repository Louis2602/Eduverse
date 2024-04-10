import { Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { CoverAuthentication, AppleStore, CHPlay } from '@/assets';
import Link from 'next/link';
import Typography from './Typography/Typography';

const LeftCover = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'var(--palette-01)',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      {/* <Box
        sx={{
          backgroundColor: 'var(--palette-01)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '70%',
            margin: '0 auto'
          }}
        >
          <Link href="/">
            <Typography
              variant="h1"
              fontWeight={'bold'}
              color="var(--color-white)"
              sx={{ alignSelf: 'flex-start' }}
              fontFamily="Poppins"
            >
              Eduverse
            </Typography>
          </Link>
          <Box
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '70%'
            }}
          >
            <Typography
              variant="body1"
              my={1}
              color="var(--color-white)"
              sx={{
                textAlign: 'left'
              }}
            >
              Cut from geometric cotton lace mimicking decorative fretwork, this blouse reveals hints of skin offsetting
              its long-sleeve silhouette
            </Typography>
          </Box>
          <Box
            sx={{
              my: 3,
              ml: '-1em'
            }}
          >
            <Image src={AppleStore} width={210} height={80} alt="apple_store" />
            <Image src={CHPlay} width={210} height={80} alt="ch_play" />
          </Box>
          <Image
            src={CoverAuthentication}
            width={380}
            height={400}
            alt="cover"
            style={{ maxWidth: '100%', height: 'auto', padding: '0', margin: '0' }}
          />
        </Box>
      </Box> */}
    </Box>
  );
};

export default LeftCover;
