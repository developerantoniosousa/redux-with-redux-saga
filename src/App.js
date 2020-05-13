import './tools/reactotron';

import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';

import store from './store';

import ProductList from './components/ProductList';

const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <ProductList />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
