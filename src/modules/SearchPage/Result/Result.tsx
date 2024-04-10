import { MyContainer } from '@/components';
import CourseCard from '@/components/CourseCard/CourseCard';
import { Box, Button, Pagination, useMediaQuery } from '@mui/material';
import React from 'react';
import Typography from '@/components/Typography/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ResultLayout, TopContent, SortButton, SortBox, ResultContainer } from './StyleResult';
import { CoursesData } from '@/services/fakeData';
import { ICourse } from '@/type';
import useCourse from '@/common/hooks/useCourse';
const Result = () => {
  // const i`sSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));`
  const { courses } = useCourse();

  return (
    <ResultContainer>
      <TopContent>
        <Typography variant="body1">
          There Are <b>9 Results</b> For Your Search Key: <b>Search Key</b>
        </Typography>
        <SortBox>
          <Typography variant="body1" noWrap>
            <b>Sort by</b>
          </Typography>
          <SortButton>
            <Typography variant="body1">Rating, Ascending</Typography>
            <KeyboardArrowDownIcon />
          </SortButton>
        </SortBox>
      </TopContent>
      <ResultLayout>
        {courses?.slice(0, 12).map((course: ICourse) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ResultLayout>
      <Pagination count={10} />
    </ResultContainer>
  );
};

export default Result;
