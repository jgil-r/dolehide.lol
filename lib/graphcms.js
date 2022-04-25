import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.GRAPHCMS_PROJECT_API,
  cache: new InMemoryCache(),
});
