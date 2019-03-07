import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reduxSaga from 'redux-saga';
import { createLogger } from 'redux-logger';

import header from '../reducers/header';

const rootReducer = (history: any) => combineReducers({
  header,
  router: connectRouter(history),
});

const sagaMiddleware = reduxSaga();

const logger = createLogger({
  diff:true,
  collapsed:true,
});

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      sagaMiddleware,
      logger,
    ),
  ),
);

export default store;
