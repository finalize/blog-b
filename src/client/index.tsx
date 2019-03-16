import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import configureStore, { history } from './store/configureStore';

import Home from './containers/Home';
import Create from './containers/Create';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={() => (<Home />)} />
        <Route path="/create" component={() => (<Create />)} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
