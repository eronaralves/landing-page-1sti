import React from 'react';
import Home from './home';

// querys
import { getHomeHero } from '../services/hygraph/home';

export default function HomePage(props: any) {
  const newProps = props || {};

  return <Home {...newProps} />;
}

export const getServerSideProps = async (context: any) => {
  const data = await getHomeHero(context.locale);
  return {
    props: {
      data,
    },
  };
};
