import '@/styles/globals.css';
import '@/styles/colors.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';
import Head from 'next/head';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SessionProvider from '@/common/context/SessionProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from '@/components';
import AuthContext from '@/common/context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eduverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <SessionProvider>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <AuthContext>
            <Component {...pageProps} />
            <ScrollToTop />
          </AuthContext>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
