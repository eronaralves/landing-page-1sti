import { gql } from '@apollo/client';
import { initializeApollo } from '../../libs/apollo';

const apolloClient = initializeApollo();

export async function getNavigation(locale: string) {
  const query = gql`
    query {
      navigations(locales: [${locale}]) {
        link
        label
        target
      }
    }
  `;

  const { data } = await apolloClient.query({ query });

  return data;
}
