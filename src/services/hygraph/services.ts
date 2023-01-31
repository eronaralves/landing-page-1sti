import { gql } from '@apollo/client';
import { initializeApollo } from '../../libs/apollo';

const apolloClient = initializeApollo();

export async function getServices(locale: string) {
  const query = gql`
    query {
      serviceSections(locales: [${locale}]) {
        heading(locales: [${locale}]) {
          title
          description
        }
        descrptionService
      }
      services(locales: [${locale}]) {
        title
        subtitle
        description {
          markdown
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
