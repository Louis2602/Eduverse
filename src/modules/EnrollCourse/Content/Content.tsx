import { ROUTE } from '@/common/constants/route';
import useCourse from '@/common/hooks/useCourse';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography/Typography';
import { ICourse } from '@/type';
import { Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Stack, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const MyWrapper = styled('div')(({ theme }) => ({
  padding: '3rem 8rem 4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 2rem',
    flexDirection: 'column'
  }
}));

const MyProcessText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  color: 'var(--color-black)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px'
  }
}));

const MyProcessPercentText = styled('span')(({ theme }) => ({
  color: 'var(--palette-02)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const MyFinishBtnText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '600',
  fontFamily: 'Poppins',
  color: 'var(--color-white)',
  [theme.breakpoints.down('sm')]: {}
}));

const MySectionTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-01)',
  fontSize: '28px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const MyLearnText = styled(Typography)(({ theme }) => ({
  color: 'var(--color-black)',
  fontSize: '16px',
  fontWeight: '600',
  [theme.breakpoints.down('sm')]: {}
}));

const MyAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: '4px',
  background: 'rgba(157, 192, 139, 0.20)',
  padding: '0.75rem 1rem',
  [theme.breakpoints.down('sm')]: {}
}));

const MyAccordionTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--color-black)',
  fontSize: '18px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCard = styled('div')(({ theme }) => ({
  borderRadius: '8px',
  background: 'rgba(157, 192, 139, 0.20)',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCardContent = styled('div')(({ theme }) => ({
  padding: '0.5rem 1rem',
  [theme.breakpoints.down('sm')]: {}
}));

const MyFinishBtn = styled(Button)(({ theme }) => ({
  width: 'fit-content',
  padding: '1rem 2rem',
  backgroundColor: 'var(--gray-01) !important',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    height: '120px'
  }
}));

const MyInterestCourseTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-03)',
  fontSize: '16px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const MyInterestCourseWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '64px',
  [theme.breakpoints.down('sm')]: {
    gap: '10px'
  }
}));

const MyLessonTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--color-black)',
  fontSize: '16px',
  fontWeight: '500',
  [theme.breakpoints.down('sm')]: {}
}));

const MyLessonDuration = styled(Typography)(({ theme }) => ({
  color: 'var(--gray-03)',
  fontSize: '12px',
  fontWeight: '500',
  [theme.breakpoints.down('sm')]: {}
}));

const MyAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.75rem 1rem 0.75rem 3rem',
  borderBottom: '1px solid rgba(185, 185, 185, 0.30)',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCardImg = styled('div')(({ theme }) => ({
  width: '100%',
  height: '180px',
  borderRadius: 'inherit',
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  [theme.breakpoints.down('sm')]: {
    height: '120px'
  }
}));

const Content = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const { course } = useCourse(String(courseId));

  return (
    <MyWrapper>
      {/* Overview */}
      <Stack direction="column" spacing="16px">
        <MySectionTitle>Overview</MySectionTitle>
        <Stack direction="row" spacing="16px" alignItems="center">
          <MyProcessText>
            Your process: <MyProcessPercentText>73%</MyProcessPercentText>
          </MyProcessText>
          <Button
            variant="outlined"
            onClick={() =>
              router.push(`${ROUTE.ENROLL_COURSE}/${courseId}/video/${course?.chapters[0]?.lessons[0]?.id}`)
            }
          >
            Continue your lesson
          </Button>
        </Stack>
      </Stack>
      {/* Learning Material */}
      <Stack direction="column" spacing="16px">
        <MySectionTitle>Learning Material</MySectionTitle>
        <Breadcrumbs separator={<Icon.Dots />} aria-label="breadcrumb">
          <Stack direction="row" spacing="4px">
            <MyLearnText fontWeight="extraBold">6</MyLearnText>
            <MyLearnText>Chapters</MyLearnText>
          </Stack>
          <Stack direction="row" spacing="4px">
            <MyLearnText fontWeight="extraBold">58</MyLearnText>
            <MyLearnText>Videos</MyLearnText>
          </Stack>
          <Stack direction="row" spacing="4px">
            <MyLearnText fontWeight="extraBold">8</MyLearnText>
            <MyLearnText>hours</MyLearnText>
            <MyLearnText fontWeight="extraBold">48</MyLearnText>
            <MyLearnText>minutes</MyLearnText>
          </Stack>
        </Breadcrumbs>
        {course?.chapters?.map(item => (
          <Accordion key={item} sx={{ boxShadow: 'none' }}>
            <MyAccordionSummary expandIcon={<Icon.ArrowUp />}>
              <MyAccordionTitle>{item?.name}</MyAccordionTitle>
            </MyAccordionSummary>
            {item?.lessons?.map(subItem => (
              <MyAccordionDetails
                key={subItem}
                onClick={() => router.push(`${ROUTE.ENROLL_COURSE}/${courseId}/video/${subItem?.id}`)}
              >
                <Stack direction="row" spacing="8px">
                  <Icon.PlayCircle />
                  <MyLessonTitle>{subItem?.name}</MyLessonTitle>
                </Stack>
                <MyLessonDuration>01:03</MyLessonDuration>
              </MyAccordionDetails>
            ))}
          </Accordion>
        ))}
        <MyFinishBtn variant="contained" disabled>
          <MyFinishBtnText>Finish & Get Certification</MyFinishBtnText>
        </MyFinishBtn>
      </Stack>
      {/* May be you interested */}
      <Stack direction="column" spacing="16px">
        <MySectionTitle>May be you interested</MySectionTitle>
        <MyInterestCourseWrapper>
          {[1, 2, 3, 4, 5].map(item => (
            <MyCard key={item}>
              <MyCardImg>
                <img
                  src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4498362.jpg&fm=jpg"
                  alt="course"
                />
              </MyCardImg>
              <MyCardContent>
                <MyInterestCourseTitle>Grow Personal Financial Security Thinking & Principles</MyInterestCourseTitle>
              </MyCardContent>
            </MyCard>
          ))}
        </MyInterestCourseWrapper>
      </Stack>
    </MyWrapper>
  );
};

export default Content;
