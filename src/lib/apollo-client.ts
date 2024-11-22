import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://big-steppers.manufacs.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
