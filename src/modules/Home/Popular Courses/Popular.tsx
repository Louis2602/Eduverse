import { ButtonContent, MyCardContainer, MyTilte, PopularSection, SubTitle, Title } from './StylePopular';
import React from 'react';
import CourseCard from '@/components/CourseCard/CourseCard';
import { MyButton } from '@/components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CoursesData } from '@/services/fakeData';
import { ICourse } from '@/type';
import useCourse from '@/common/hooks/useCourse';
import { useRouter } from 'next/router';

const Popular = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const { courses } = useCourse();
  const router = useRouter();

  const imageURL =
    'https://s3-alpha-sig.figma.com/img/387f/7403/57dc6597a013c6fd8c8428a8c702c2b6?Expires=1689552000&Signature=Hn2iqjIBU1ibSTbyKkRUM84tX4hy0BdVtieIv1wGmLsRtONiEWThKNGrRcXoPRpZeuYnqZWlX2AeOw89fPPlshPzPwNaQ~mzfVOu2TfIPK022SQCIf3O2ley5kbw0ZQxuAKPdwH~zOCVhz4ePb0eXO8F8i5u7qUKwgY9USq2K0BmKWiFkqZIjhOkjEQPzj1uQnFambWs5I12ByYN44zCK55R4D42KYhxxRkeEwFm~Vu6a2m3T5IdXihv6Mj6mWiz-POIrjFt8exzu8kuGAjmoMiZF63JKpeEvEDV5GvkdSITHws4~m~zPLc0X9W6GmplT2Hc9fznLv3UIpfEmPhzgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  return (
    <PopularSection sx={{ display: 'flex', flexDirection: 'column' }}>
      <MyTilte sx={{ textAlign: 'center' }}>
        <Title>Popular Coures</Title>
        <SubTitle>Our Highly Rated Courses</SubTitle>
      </MyTilte>

      <MyCardContainer>
        {courses?.slice(0, 6).map((course: ICourse) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </MyCardContainer>

      <MyButton
        variant="secondary"
        sx={{ width: '194px', display: 'flex', gap: '12px', justifyContent: 'center', justifyItems: 'center' }}
        onClick={() => router.push('/search-page')}
      >
        <ButtonContent>All Courses</ButtonContent>
        <ArrowForwardIcon sx={{ color: 'white' }} />
      </MyButton>
    </PopularSection>
  );
};

export default Popular;
