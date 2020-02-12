import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

import Home from './home';

const httpLink = createHttpLink({
  uri: 'https://fast-refuge-98871.herokuapp.com/'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const App: () => React$Node = () => {
  return (
    <>
    <ApolloProvider client={client}>
        <Home />
    </ApolloProvider>
    </>
  );
};

export default App;
