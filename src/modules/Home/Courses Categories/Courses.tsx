import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { courses } from './fakeData';
import Image from 'next/image';
import { MyButton } from '@/components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  ButtonContent,
  CardAction,
  CardTitle,
  CardsContent,
  CoursesCategories,
  MyCard,
  TopicsContainer
} from './StyleCourses';
import Title from '../components/Title/Title';

const Courses = () => {
  return (
    <CoursesCategories>
      <Title title="COURSE CATEGORIES" subtitle="Popular Topics To Learn" />

      <TopicsContainer>
        {courses.map((item, index) => (
          <MyCard key={index}>
            <CardAction>
              <Box sx={{ width: '64px', height: '64px' }}>
                <Image src={item.img} alt="hinh" />
              </Box>
              <CardsContent>
                <CardTitle>{item.title}</CardTitle>
                <CardsContent>{item.content}</CardsContent>
              </CardsContent>
            </CardAction>
          </MyCard>
        ))}
      </TopicsContainer>
      <MyButton
        variant="secondary"
        sx={{ width: '194px', display: 'flex', gap: '12px', justifyContent: 'center', justifyItems: 'center' }}
      >
        <ButtonContent>All Topics</ButtonContent>
        <ArrowForwardIcon sx={{ color: 'white' }} />
      </MyButton>
    </CoursesCategories>
  );
};

export default Courses;
