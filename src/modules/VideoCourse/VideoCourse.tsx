import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import { FloatingAsk } from '@/components';

const VideoCourse = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <FloatingAsk />
    </div>
  );
};

export default VideoCourse;
