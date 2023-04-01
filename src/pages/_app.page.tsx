import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsTheme as Steps } from 'chakra-ui-steps';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    components: {
      Steps,
    },
  })

  return (
    <>
      <ChakraProvider theme={theme}>
        <Toaster />
        <Component {...pageProps} />;
      </ChakraProvider>
    </>
  );
}