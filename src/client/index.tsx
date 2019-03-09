import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import configureStore, { history } from './store/configureStore';

import Header from './containers/Header';
import Markdown from './containers/Markdown';

ReactDOM.render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={() => (<Header />)} />
        <Route path="/wiki" component={() => (<Markdown />)} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
