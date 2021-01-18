import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import configureStore from './app/redux/store';

const store = configureStore();

import App from './App';

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(MyApp);
