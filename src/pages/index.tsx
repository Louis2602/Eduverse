// import Home from '@/modules/Home/Home';
import React from 'react';
import { MainLayout } from '@/components';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { findUserById } from '@/services/user';
import { useAuth } from '@/common/context/AuthContext';

const Home = dynamic(() => import('@/modules/Home/Home'), {
  ssr: false
});

export const config = {
  unstable_runtimeJS: false
};

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
