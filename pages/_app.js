import Head from 'next/head';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import { AuthProvider } from '@/contexts/AuthContext';
import { Global, css } from '@emotion/react';
import NProgress from 'nprogress';
import { Router } from 'next/dist/client/router';
import theme from '@/styles/theme';
import { DefaultSeo } from 'next-seo';
import 'nprogress/nprogress.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import SEO from '../next-seo.config';

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const myTheme = extendTheme(theme);

const GlobalStyle = ({ children }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        #nprogress {
          position: relative;
          z-index: 9999999;
        }
        #nprogress .bar {
          background: #7928ca !important;
          height: 3px;
        }
      `}
    />
    {children}
  </>
);

function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={myTheme}>
        <AuthProvider>
          <DefaultSeo {...SEO} />
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
