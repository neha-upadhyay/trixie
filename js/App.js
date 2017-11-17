
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import configureStore from './store/configureStore';
import Main from './Main';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
