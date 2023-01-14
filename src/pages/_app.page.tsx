import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../utils/apollo';

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

  background-color: ${({ theme }) => theme.colors.green800};
`;

export default function App({ Component, pageProps }: AppProps) {
  // instanciando o client, com initialState para cache
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <LanguageProvider>
          <Container>
            <Navigation />
            <Component {...pageProps} />
          </Container>
        </LanguageProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

// export const getServerSideProps = async (context: any) => {
//   const apolloClient = initializeApollo();

//   console.log(context);

//   const { data } = await apolloClient.query({
//     query: gql`
//       query {
//         videos {
//           coverVideo {
//             url
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       videos: data.videos,
//     },
//   };
// };
