import React from 'react';
import { useScrollTrigger, Box, Fade, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });
  return (
    <Fade in={trigger}>
      <Box role="presentation" sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999 }}>
        <Fab
          size="small"
          onClick={() => window.scrollTo(0, 0)}
          sx={{
            backgroundColor: 'var(--palette-02)',
            color: 'white',
            transition: '200ms all ease-in-out',
            '&:hover': {
              backgroundColor: 'var(--palette-02)'
            }
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
