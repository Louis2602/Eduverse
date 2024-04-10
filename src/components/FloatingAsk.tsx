import React from 'react';
import { useScrollTrigger, Box, Fab } from '@mui/material';
import Typography from './Typography/Typography';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { styled } from '@mui/material/styles';
import { MyButton } from '.';
import AskForm from '@/modules/VideoCourse/Content/AskForm';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--palette-05);
  padding: 16px 32px;
  border-radius: 32px;
`;

const FloatingAsk = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box role="presentation" sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 999 }}>
      <MyButton
        variant="primary"
        sx={{
          color: 'var(--palette-01)',
          backgroundColor: 'var(--palette-05)',
          padding: '16px 32px',
          borderRadius: 8,
          '&:hover': {
            backgroundColor: 'var(--palette-05)'
          }
        }}
        startIcon={<ChatBubbleOutlineIcon />}
        onClick={handleClickOpen}
      >
        Ask
      </MyButton>
      <AskForm open={open} setOpen={setOpen} />
    </Box>
  );
};

export default FloatingAsk;
