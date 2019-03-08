import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import configureStore, { history } from './store/configureStore';

import Header from './containers/Header';

ReactDOM.render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={() => (<Header />)} />
        <Route path="/about" component={() => (<div>!!!!!</div>)} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
