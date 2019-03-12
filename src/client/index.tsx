import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import configureStore, { history } from './store/configureStore';

import Home from './containers/Home';
import Markdown from './containers/Markdown';

ReactDOM.render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={() => (<Home />)} />
        <Route path="/create" component={() => (<Markdown />)} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
