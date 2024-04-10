import React from 'react';

// Mui Imports
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Icons
import Icon from '@/components/Icon';
import VideoTitle from './VideoTitle';
import { useRouter } from 'next/router';
import { ICourse } from '@/type';
import useCourse from '@/common/hooks/useCourse';
import { ROUTE } from '@/common/constants/route';
import { getVideo } from '@/common/utils/video';

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

const Content = () => {
  const router = useRouter();
  const { courseId, videoId } = router.query;
  const { course } = useCourse(String(courseId));
  const lesson = getVideo(course, videoId);

  return (
    <Box height="100vh" display="flex">
      <Box sx={{ flex: 1, marginRight: '16px' }}>
        <Stack direction="column" spacing="16px">
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
      </Box>
      <Box flex="2">
        <iframe
          width="100%"
          height="60%"
          src={lesson?.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <VideoTitle lesson={lesson} />
      </Box>
    </Box>
  );
};

export default Content;
