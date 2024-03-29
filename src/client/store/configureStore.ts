import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reduxSaga from 'redux-saga';
import { createLogger } from 'redux-logger';

import sagas from '../sagas';

import header from '../reducers/header';

const rootReducer = (history: any) => combineReducers({
  header,
  router: connectRouter(history),
});

export const history = createBrowserHistory();

export default function configureStore() {
  const sagaMiddleware = reduxSaga();

  const logger = createLogger({
    diff:true,
    collapsed:true,
  });

  const store = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(
        sagaMiddleware,
        logger,
      ),
    ),
  );

  sagaMiddleware.run(sagas);
  return store;
}
