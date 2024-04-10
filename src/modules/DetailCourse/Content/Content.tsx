import { ROUTE } from '@/common/constants/route';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography/Typography';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  Stack,
  styled,
  useMediaQuery
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Review from '../ReviewSection';
import Comments from '../Comments';
import { ICourse } from '@/type';
import { CoursesData } from '@/services/fakeData';
import useCourse from '@/common/hooks/useCourse';

const MyWrapper = styled('div')(({ theme }) => ({
  padding: '3rem 8rem 4rem',
  display: 'flex',
  gap: '48px',
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 2rem',
    flexDirection: 'column'
  }
}));

const MyLeftContentWrapper = styled('div')(({ theme }) => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
  [theme.breakpoints.down('sm')]: {
    gap: '32px'
  }
}));

const MyRightContentWrapper = styled('div')(({ theme }) => ({
  maxWidth: '387px',
  width: '387px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));

const MyPrice = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  color: 'var(--palette-02)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px'
  }
}));

const MyEnrollBtnText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '600',
  fontFamily: 'Poppins',
  color: 'var(--palette-05)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const MyFollowBtnText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '600',
  fontFamily: 'Poppins',
  color: 'var(--palette-03)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const MyCourseBtn = styled(Button)(({ theme }) => ({
  width: '260px',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCourseImgWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  borderRadius: '16px',
  [theme.breakpoints.down('sm')]: {}
}));

export const MySectionTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-01)',
  fontSize: '28px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const MyLearnWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {}
}));

const MyLearnTextWrapper = styled('div')(({ theme }) => ({
  flexBasis: '50%',
  display: 'flex',
  gap: '16px',
  marginBottom: '1rem',
  paddingRight: '2rem',
  [theme.breakpoints.down('sm')]: {
    flexBasis: '100%'
  }
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

const MyCourseArchieveText = styled(Typography)(({ theme }) => ({
  color: 'var(--color-black)',
  fontSize: '12px',
  fontWeight: '500',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCard = styled('div')(({ theme }) => ({
  width: '30%',
  borderRadius: '8px',
  background: 'rgba(157, 192, 139, 0.20)',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCardContent = styled('div')(({ theme }) => ({
  padding: '0.5rem 1rem',
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

const MyInterestCourseTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-03)',
  fontSize: '16px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const MyInterestCourseWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
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
  [theme.breakpoints.down('sm')]: {}
}));

const Content = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const { course } = useCourse(String(courseId));
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <MyWrapper>
      <MyLeftContentWrapper>
        <Stack direction="column" spacing="16px">
          <MySectionTitle>What will you learn?</MySectionTitle>
          <MyLearnWrapper>
            {course?.willLearn?.slice(0, 8).map(item => (
              <MyLearnTextWrapper key={item}>
                <Icon.Check />
                <MyLearnText>{item}</MyLearnText>
              </MyLearnTextWrapper>
            ))}
          </MyLearnWrapper>
        </Stack>

        <Stack direction="column" spacing="16px">
          <MySectionTitle>Content of the course</MySectionTitle>
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
                <MyAccordionDetails key={subItem}>
                  <Stack direction="row" spacing="8px" alignItems="center">
                    <Icon.PlayCircle />
                    <MyLessonTitle>{subItem?.name}</MyLessonTitle>
                  </Stack>
                  <MyLessonDuration>01:03</MyLessonDuration>
                </MyAccordionDetails>
              ))}
            </Accordion>
          ))}
        </Stack>

        <Stack direction="column" spacing="16px">
          <MySectionTitle>Requirement</MySectionTitle>
          {course?.requirements?.slice(0, 3).map(item => (
            <MyLearnTextWrapper key={item}>
              <Icon.Check />
              <MyLearnText>{item}</MyLearnText>
            </MyLearnTextWrapper>
          ))}
        </Stack>

        <Review />
        <Comments />

        {isSmallScreen && (
          <MyRightContentWrapper>
            <MyCourseImgWrapper>
              <img src={course?.courseThumbnailUrl} alt="course" />
            </MyCourseImgWrapper>
            <MyPrice>${course?.currentPrice}</MyPrice>
            <MyCourseBtn variant="outlined">
              <MyFollowBtnText>FOLLOW THIS COURSE</MyFollowBtnText>
            </MyCourseBtn>
            <MyCourseBtn variant="tertiary">
              <MyEnrollBtnText>ENROLL NOW</MyEnrollBtnText>
            </MyCourseBtn>
            <Stack spacing="8px">
              <Stack direction="row" spacing="16px" alignItems="center">
                <Icon.Clock />
                <MyCourseArchieveText>
                  Total time <span style={{ fontWeight: '700' }}>08 hours 49 minutes</span>
                </MyCourseArchieveText>
              </Stack>
              <Stack direction="row" spacing="16px" alignItems="center">
                <Icon.Clock />
                <MyCourseArchieveText>
                  Total <span style={{ fontWeight: '700' }}>53</span> lessons
                </MyCourseArchieveText>
              </Stack>
              <Stack direction="row" spacing="16px" alignItems="center">
                <Icon.Clock />
                <MyCourseArchieveText>Full lifetime access</MyCourseArchieveText>
              </Stack>
              <Stack direction="row" spacing="16px" alignItems="center">
                <Icon.Clock />
                <MyCourseArchieveText>Certificate of completion</MyCourseArchieveText>
              </Stack>
              <Stack direction="row" spacing="16px" alignItems="center">
                <Icon.Clock />
                <MyCourseArchieveText>Access on mobile and TV</MyCourseArchieveText>
              </Stack>
            </Stack>
          </MyRightContentWrapper>
        )}

        <Stack direction="column" spacing="16px">
          <MySectionTitle>May be you interested</MySectionTitle>
          <MyInterestCourseWrapper>
            {CoursesData.slice(0, isSmallScreen ? 2 : 3).map((item: ICourse) => (
              <MyCard
                key={item.id}
                onClick={() =>
                  router.push({
                    pathname: `/${ROUTE.COURSE}/${item.id}`,
                    query: { data: JSON.stringify(item) }
                  })
                }
              >
                <MyCardImg>
                  <img src={item.courseThumbnailUrl} alt="course" />
                </MyCardImg>
                <MyCardContent>
                  <MyInterestCourseTitle>{item.courseName}</MyInterestCourseTitle>
                </MyCardContent>
              </MyCard>
            ))}
          </MyInterestCourseWrapper>
        </Stack>
      </MyLeftContentWrapper>

      {!isSmallScreen && (
        <MyRightContentWrapper>
          <MyCourseImgWrapper>
            <img src={course?.courseThumbnailUrl} alt="course" />
          </MyCourseImgWrapper>
          <MyPrice>${course?.currentPrice}</MyPrice>
          <MyCourseBtn variant="outlined">
            <MyFollowBtnText>FOLLOW THIS COURSE</MyFollowBtnText>
          </MyCourseBtn>
          <MyCourseBtn variant="tertiary" onClick={() => router.push(`/${ROUTE.ENROLL_COURSE}/${courseId}`)}>
            <MyEnrollBtnText>ENROLL NOW</MyEnrollBtnText>
          </MyCourseBtn>
          <Stack spacing="8px">
            <Stack direction="row" spacing="16px" alignItems="center">
              <Icon.Clock />
              <MyCourseArchieveText>
                Total time <span style={{ fontWeight: '700' }}>08 hours 49 minutes</span>
              </MyCourseArchieveText>
            </Stack>
            <Stack direction="row" spacing="16px" alignItems="center">
              <Icon.Clock />
              <MyCourseArchieveText>
                Total <span style={{ fontWeight: '700' }}>53</span> lessons
              </MyCourseArchieveText>
            </Stack>
            <Stack direction="row" spacing="16px" alignItems="center">
              <Icon.Clock />
              <MyCourseArchieveText>Full lifetime access</MyCourseArchieveText>
            </Stack>
            <Stack direction="row" spacing="16px" alignItems="center">
              <Icon.Clock />
              <MyCourseArchieveText>Certificate of completion</MyCourseArchieveText>
            </Stack>
            <Stack direction="row" spacing="16px" alignItems="center">
              <Icon.Clock />
              <MyCourseArchieveText>Access on mobile and TV</MyCourseArchieveText>
            </Stack>
          </Stack>
        </MyRightContentWrapper>
      )}
    </MyWrapper>
  );
};

export default Content;
