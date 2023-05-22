import { ApolloClient, InMemoryCache } from "@apollo/client";

// eslint-disable-next-line import/no-anonymous-default-export
const client = new ApolloClient({
  uri: "https://countries.nausicaa.wilders.dev/",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
    },
  },
});

export default client;
