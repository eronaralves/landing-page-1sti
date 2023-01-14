import { gql } from '@apollo/client';

export const GET_HERO_VIDEO_QUERY = gql`
  query {
    homeHeroes(locales: [en]) {
      id
      title
      localizations(includeCurrent: true) {
        locale
        title
      }
    }
  }
`;
