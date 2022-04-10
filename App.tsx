import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';
import { ApolloProvider } from '@apollo/client';
import { apolloClient, } from './src/Services/Graphql/config';



export default function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <StatusBar backgroundColor={'rgb(16, 3, 63)'} />
          <Routes />

      </NavigationContainer>
    </ApolloProvider>
  );
};


