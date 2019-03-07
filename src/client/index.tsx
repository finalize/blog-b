import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store/configureStore';

import Header from './containers/Header';

ReactDOM.render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <Header />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
