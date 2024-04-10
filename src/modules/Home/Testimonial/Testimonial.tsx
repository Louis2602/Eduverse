import React from 'react';
import Title from '../components/Title/Title';
import { Avatar, Rating, styled, useMediaQuery } from '@mui/material';
import Button from '@/components/Button/Button';
import Typography from '@/components/Typography/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Carousel } from 'react-responsive-carousel';

const MyWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  padding: '6rem',
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 2rem'
  }
}));

const MyBody = styled('div')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {}
}));

const MyBtnText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '600',
  color: 'var(--color-white)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
}));

const MyCard = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '1.5rem',
  borderRadius: '8px',
  background: 'rgba(157, 192, 139, 0.20)',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCardContent = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '500',
  color: 'var(--color-black)',
  textAlign: 'start',
  [theme.breakpoints.down('sm')]: {}
}));

const MyUserWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {}
}));

const MyUserInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  [theme.breakpoints.down('sm')]: {}
}));

const MyUserName = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: '600',
  color: 'var(--palette-01)',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const MyUserRole = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '500',
  color: 'var(--palette-01)',
  fontFamily: 'Poppins',
  textAlign: 'start',
  [theme.breakpoints.down('sm')]: {}
}));

const MyCarousel = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: '24px',
  [theme.breakpoints.down('sm')]: {}
}));

const Testimonial = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  // Function to group the array items into sets of 3
  const groupItems = (array: any, size: number) => {
    const groups = [];
    array.push(...array.slice(0, array.length % size !== 0 ? size - (array.length % size) : 0));
    for (let i = 0; i < array.length; i += size) {
      groups.push(array.slice(i, i + size));
    }
    return groups;
  };

  // Group the items into sets of 3
  const itemGroups = groupItems([1, 2, 3, 4, 5, 6, 7, 8, 9], isSmallScreen ? 1 : 3);

  return (
    <MyWrapper>
      <Title title="REVIEWS" subtitle="WHAT ARE PEOPLE SAYING ABOUT US?" />
      <MyBody>
        <Carousel autoPlay swipeable={true} showArrows={false} showThumbs={false} showStatus={false}>
          {itemGroups.map(item => (
            <MyCarousel key={item}>
              {item.map(subItem => (
                <MyCard key={subItem}>
                  <MyUserWrapper>
                    <Avatar sizes="68px">H</Avatar>
                    <MyUserInfo>
                      <MyUserName>Le Vu Ngan Lam</MyUserName>
                      <MyUserRole>Student at HCMUS</MyUserRole>
                    </MyUserInfo>
                  </MyUserWrapper>
                  <MyCardContent>
                    The Eduverse Website is an exceptional coding resource. With its user-friendly interface,
                    comprehensive content, practical approach to learning, and vibrant community, it's a top-notch
                    destination for aspiring programmers. Whether you&apos;re a beginner or an experienced developer,
                    this website is a must-visit for mastering the art of coding. Highly recommended!
                  </MyCardContent>
                  <Rating name="read-only" value={5} readOnly />
                </MyCard>
              ))}
            </MyCarousel>
          ))}
        </Carousel>
      </MyBody>
      <Button variant="secondary" sx={{ width: 'fit-content', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <MyBtnText>Write Review</MyBtnText>
        <ArrowForwardIcon sx={{ color: 'white' }} />
      </Button>
    </MyWrapper>
  );
};

export default Testimonial;
