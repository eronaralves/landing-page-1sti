import type { AppProps } from 'next/app';
import '../styles/fonts.css';

// Theme
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { defaultTheme } from '../styles/theme/default';

// Components
import { Navigation } from '../components/Navigation';
import { LanguageProvider } from '../context/app.context';

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 1.1875rem;

  background-color: ${({ theme }) => theme.colors.green800};
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <LanguageProvider>
        <Container>
          <Navigation />
          <Component {...pageProps} />
        </Container>
      </LanguageProvider>
    </ThemeProvider>
  );
}
