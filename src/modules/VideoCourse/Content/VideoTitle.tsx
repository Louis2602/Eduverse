import React from 'react';

// Mui Imports
import Typography from '@/components/Typography/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { MyButton } from '@/components';
import { ILesson } from '@/type';
import { toast } from 'react-toastify';

const TitleWrapper = styled(Box)`
  margin-top: 16px;
`;

interface VideoTitleProps {
  lesson: ILesson;
}

const VideoTitle: React.FC<VideoTitleProps> = ({ lesson }) => {
  return (
    <TitleWrapper>
      <Typography
        fontSize="xxl"
        sx={{ color: 'var(--palette-01)' }}
        fontFamily="Poppins"
        fontWeight="medium"
        gutterBottom
      >
        {lesson?.name}
      </Typography>
      <Typography fontSize="md" sx={{ color: 'var(--palette-01)' }} fontFamily="Poppins" gutterBottom>
        Updated at 30th August, 2023
      </Typography>
      <MyButton
        variant="outlined"
        sx={{
          color: 'var(--palette-01)',
          marginTop: 2
        }}
        onClick={() => {
          toast('This function will be available soon!', {
            position: 'top-center',
            type: 'info',
            theme: 'colored',
            autoClose: 2000
          });
        }}
      >
        Download PDF Material
      </MyButton>
    </TitleWrapper>
  );
};

export default VideoTitle;
