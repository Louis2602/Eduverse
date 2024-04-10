import useCourse from '@/common/hooks/useCourse';
import Typography from '@/components/Typography/Typography';
import { Stack, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const MyBackground = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '3rem 8rem',
  background: 'radial-gradient(4037.22% 141.42% at -0.00% 0.00%, #FFF 0%, rgba(157, 192, 139, 0.20) 54.28%, #FFF 100%)',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem'
  }
}));

const MyTitleText = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  fontWeight: 700,
  color: 'var(--palette-01)',
  fontFamily: 'Poppins'
}));

const MyCourseNameText = styled('span')(({ theme }) => ({
  color: 'var(--palette-02)'
}));

const MyCourseDescText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: 'var(--color-black)',
  [theme.breakpoints.down('sm')]: {}
}));

const Header = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const { course } = useCourse(String(courseId));

  return (
    <MyBackground>
      <Stack direction="column" spacing="8px">
        <MyTitleText>
          Welcome to <MyCourseNameText>{course?.courseName}</MyCourseNameText> course!
        </MyTitleText>
        <MyCourseDescText>Explore the learning materials provided below.</MyCourseDescText>
      </Stack>
    </MyBackground>
  );
};

export default Header;
