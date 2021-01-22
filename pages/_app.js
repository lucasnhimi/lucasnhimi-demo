import Head from 'next/head';
import { ChakraProvider , extendTheme, CSSReset } from "@chakra-ui/react"
import { AuthProvider } from '@/contexts/AuthContext';
import { Global, css } from '@emotion/react';
import theme from '@/styles/theme';

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
