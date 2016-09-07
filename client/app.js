import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import makeStore from './src/makeStore.js';
import routes from './src/routes.js';
import { syncHistoryWithStore } from 'react-router-redux';

const store = makeStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>
  , document.getElementById('app')
);
