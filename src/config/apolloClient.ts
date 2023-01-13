import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clct55mq105er01un1kel95kv/master',
  cache: new InMemoryCache(),
});
