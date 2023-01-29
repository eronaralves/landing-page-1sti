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
      services(locales: [${locale}]) {
        title
        subtitle
        description {
          html
        }
        asset {
          url
        }
        slug
      }
    }
  `;

  const { data } = await apolloClient.query({ query });

  return data;
}
