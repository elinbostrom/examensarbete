import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  }
}

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
})


/* Setup connection between client and Wordpress. 
by creating a new ApolloClient and set its properties
to the connected GRAPHQL endpoint, InMemoryCache and the default options */
const client = new ApolloClient({
  link,
  cache,
  defaultOptions
})

export default client;