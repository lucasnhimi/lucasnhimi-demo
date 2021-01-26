import Head from 'next/head';
import { ChakraProvider , extendTheme, CSSReset } from "@chakra-ui/react"
import { AuthProvider } from '@/contexts/AuthContext';
import { Global, css } from '@emotion/react';
import NProgress from 'nprogress';
import { Router } from 'next/dist/client/router';
import theme from '@/styles/theme';
import 'nprogress/nprogress.css';

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

const myTheme = extendTheme(theme)

const GlobalStyle = ({ children }) => {
  return (
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
            background: #7928CA !important;
            height: 3px;
          }
        `}
      />
      {children}
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={myTheme}>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  )
}

export default App
