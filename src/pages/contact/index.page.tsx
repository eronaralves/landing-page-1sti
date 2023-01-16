import React from 'react';
import { useRouter } from 'next/router';

// Utils
import { initializeApollo } from '../../utils/apollo';
import { gql } from '@apollo/client';

export default function Contact(props: any) {
  console.log(props.data.homeHeroes[0].title);
  const router = useRouter();

  const handleRoute = (locale: 'en' | 'pt_BR') =>
    router.push(router.asPath, router.asPath, { locale });

  return (
    <div
      style={{
        paddingTop: 300,
      }}
    >
      <h1>{props.data.homeHeroes[0].title}</h1>
      <button onClick={() => handleRoute('pt_BR')}>Portugues</button>
      <button onClick={() => handleRoute('en')}>Ingles</button>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  const apolloClient = initializeApollo();

  console.log(context.locale);

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

  return {
    props: {
      data,
    },
  };
};
