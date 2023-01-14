// Utils
import { initializeApollo } from '../utils/apollo';
import { gql } from '@apollo/client';

import Home from './home/index.page';

export default function HomePage(props: any) {
  const newProps = props || {};

  return <Home {...newProps} />;
}

export const getServerSideProps = async (context: any) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      query {
        homeHeroes(locales: [${context.locale}]) {
          id
          title
        }
      }
    `,
  });

  const hero = data.homeHeroes[0];

  return {
    props: {
      hero,
    },
  };
};
