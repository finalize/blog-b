import { fork } from 'redux-saga/effects';
import { handleTweet } from './timeline';

function* rootSaga() {
  yield fork(handleTweet);
}

export default rootSaga;
