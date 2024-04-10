import useCourse from '@/common/hooks/useCourse';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography/Typography';
import { Breadcrumbs, Rating, Stack, styled } from '@mui/material';
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

const MyBreadCrumbsText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  color: 'var(--palette-01)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const MyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  color: 'var(--palette-01)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px'
  }
}));

const MyDescription = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  [theme.breakpoints.down('sm')]: {}
}));

const MyTextWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: 'var(--palette-01)',
  [theme.breakpoints.down('sm')]: {}
}));

const MyInfoText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '800',
  color: 'var(--palette-01)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const MyInstructorName = styled(Typography)(({ theme }) => ({
  textDecoration: 'underline',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCountRating = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '500',
  color: 'var(--gray-02)',
  [theme.breakpoints.down('sm')]: {}
}));

const Header = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const { course } = useCourse(String(courseId));

  return (
    <MyBackground>
      <Breadcrumbs separator={<Icon.Dots />} aria-label="breadcrumb">
        {course?.categories?.map(item => (
          <MyBreadCrumbsText key={item}>{item}</MyBreadCrumbsText>
        ))}
      </Breadcrumbs>
      <MyTitle>{course?.courseName}</MyTitle>
      <MyDescription>
        <Stack direction="row" spacing="16px" alignItems="center">
          <Stack direction="row" spacing="4px" alignItems="center">
            <Rating name="read-only" value={4} readOnly />
            <MyCountRating>(99 votes)</MyCountRating>
          </Stack>
          <MyInfoText fontWeight="semiBold">194 learners</MyInfoText>
        </Stack>
        <MyTextWrapper>
          <MyInfoText>Language: </MyInfoText>
          <Typography fontWeight="semiBold">{course?.language}</Typography>
        </MyTextWrapper>
        <MyTextWrapper>
          <MyInfoText>Instructor:</MyInfoText>
          <MyInstructorName fontWeight="semiBold">{course?.instructor?.name}</MyInstructorName>
        </MyTextWrapper>
        <MyTextWrapper>
          <MyInfoText>Last updated:</MyInfoText>
          <Typography fontWeight="semiBold">20th June 2023</Typography>
        </MyTextWrapper>
      </MyDescription>
    </MyBackground>
  );
};

export default Header;
