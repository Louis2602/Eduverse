import React from 'react';
import { AppBar, Toolbar, Box, IconButton, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE } from '@/common/constants/route';
import Typography from '@/components/Typography/Typography';

// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useCourse from '@/common/hooks/useCourse';

const HeaderContainer = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HeaderItem = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Header = () => {
  const router = useRouter();
  const { courseId, videoId } = router.query;
  const { course } = useCourse(String(courseId));

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'var(--palette-02)',
        boxShadow: 'none'
      }}
    >
      <HeaderContainer>
        <HeaderItem>
          <IconButton
            size="small"
            disableRipple
            sx={{ color: 'var(--color-white)' }}
            onClick={() => router.push(`${ROUTE.ENROLL_COURSE}/${courseId}`)}
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <Typography fontFamily="Nunito" color="var(--color-white)">
            {course?.courseName}
          </Typography>
        </HeaderItem>
        <HeaderItem>
          <Link href={ROUTE.REPORT} passHref>
            <Typography fontFamily="Nunito" color="var(--color-white)">
              Report
            </Typography>
          </Link>
          <Link href={ROUTE.TUTORIAL} passHref>
            <Typography fontFamily="Nunito" color="var(--color-white)">
              Tutorial
            </Typography>
          </Link>
          <Link href={ROUTE.HELP} passHref>
            <Typography fontFamily="Nunito" color="var(--color-white)">
              Help
            </Typography>
          </Link>
        </HeaderItem>
      </HeaderContainer>
    </AppBar>
  );
};

export default Header;
