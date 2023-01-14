import React from 'react';
// Utils
import { initializeApollo } from '../../utils/apollo';
import { gql } from '@apollo/client';

export default function Contact(props: any) {
  console.log(props);

  return <h1>Contact</h1>;
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      query {
        videos {
          coverVideo {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      videos: data.videos,
    },
  };
};
