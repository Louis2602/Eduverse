import { Box } from '@mui/material';
import Header from './Header/Header';
import { MainLayout } from '@/components';
import Main from './Main/Main';

const GetCertificate = () => {
  return (
    <MainLayout>
      <Header />
      <Main />
    </MainLayout>
  );
};
export default GetCertificate;
