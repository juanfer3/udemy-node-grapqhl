import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import client from './Apollo/Apollo'

import './App.css';



function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Hi World</h1>
    </ApolloProvider>
  );
}

export default App;
