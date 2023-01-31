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

      serviceSections(locales: [${locale}]) {
        heading(locales: [${locale}]) {
          title
          textButton
          description
        }
        descriptionHome
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

      journeysActives(locales: [${locale}]) {
        labelEducation
        labelHealth
        labelInsurance
        labelRetail
        heading(locales: [${locale}]) {
          title
          textButton
          description
        }
      }

      insights {
        heading(locales: [${locale}]) {
          textButton
          title
          description
        }
      }

      cardInsights(locales: [${locale}]) {
        title
        type
      }

      pioneerings(locales: [${locale}]) {
        heading(locales: [${locale}]) {
          textButton
          title
          description
        }
      }

      paragraphsBooks(locales: [${locale}]) {
        paragraph
        author
      }

      cardNotifications {
        heading(locales: [${locale}]) {
          title
          description
        }
        inputData(locales: [${locale}]) {
          placeholder
          placeholderSucess
        }
      }
    }
  `;

  const { data } = await apolloClient.query({ query });

  return data;
}
