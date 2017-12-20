import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import store from './store';
import MainView from './view/root/index.jsx';

// OfflinePluginRuntime.install();

render(
  <Provider store={store}>
    <MainView />
  </Provider>,
  document.getElementById('root'),
);
