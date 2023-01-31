import { gql } from '@apollo/client';
import { initializeApollo } from '../../libs/apollo';

const apolloClient = initializeApollo();

export async function getService(locale: string, slug: string) {
  const query = gql`
    query {
      services(locales: [${locale}], where: { slug: "${slug}" }) {
        title
        subtitle
        description {
          text
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
