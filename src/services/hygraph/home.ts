import { gql } from '@apollo/client';
import { initializeApollo } from '../../libs/apollo';

const apolloClient = initializeApollo();

export async function getHomeHero(locale: string) {
  const query = gql`
    query {
      homeHeroes(locales: [${locale}]) {
        title
        description
        subtitle
        buttonClients
        buttonDeepTech
        video {
          url
        }
      }
    }
  `;

  const { data } = await apolloClient.query({ query });
  const homeHero = data.homeHeroes[0];

  return homeHero;
}
