import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

//https://www.apollographql.com/docs/react/networking/authentication/#cookie
const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
    },
  },
  link: createHttpLink({
    uri: "https://countries.nausicaa.wilders.dev/",
    credentials: "include",
  }),
});

export default client;
