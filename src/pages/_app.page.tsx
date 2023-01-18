import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';

import { useApollo } from '../utils/apollo';

import '../styles/fonts.css';

// Theme
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { defaultTheme } from '../styles/theme/default';

// Components
import { Navigation } from '../components/Navigation';

// Context
import { AppProvider } from '../context/app.context';

export default function App({ Component, pageProps }: AppProps) {
  // instanciando o client, com initialState para cache
  const client = useApollo(pageProps.initialApolloState);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <AppProvider>
            <Navigation />
            <main className="main">
              <Component {...pageProps} />
            </main>
          </AppProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AnimatePresence>
  );
}
