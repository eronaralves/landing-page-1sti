// Utils
import { useEffect, useState } from 'react';
import { initializeApollo } from '../utils/apollo';
import { GET_HERO_VIDEO_QUERY } from '../utils/querys';
import { GetServerSideProps } from 'next';

import Home from './home/index.page';

export default function HomePage(props: any) {
  const [data, setData] = useState([]);
  const apolloClient = initializeApollo();

  async function getData() {
    const { data: response } = await apolloClient.query({
      query: GET_HERO_VIDEO_QUERY,
    });

    setData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  const newProps = {
    ...data,
  };

  return <Home {...newProps} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_HERO_VIDEO_QUERY,
  });

  return {
    props: {
      videos: data,
    },
  };
}
