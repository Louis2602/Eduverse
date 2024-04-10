import { Box } from '@mui/material';
import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import ExclusiveOffer from './ExclusiveOffer/ExclusiveOffer';
import Courses from './Courses Categories/Courses';
import Reasons from './Reason Section/Reason';
import Testimonial from './Testimonial/Testimonial';
import NewsLetter from './NewsLetter/NewsLetter';
import Popular from './Popular Courses/Popular';

const Home = () => (
  <Box>
    <HeroSection />
    <ExclusiveOffer />
    <Reasons />
    <Courses />
    <Popular />
    <NewsLetter />
    <Testimonial />
  </Box>
);

export default Home;
