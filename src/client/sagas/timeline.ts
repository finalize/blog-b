import axios from 'axios';
import { call, put, take } from 'redux-saga/effects';
import {
  successTweet,
  failureTweet,
} from '../actions/timeline';

const tweet = async () => {
  try {
    const tweets = await axios.get('/tweet');
    console.log(tweets);
    return { result: tweets };
  } catch (error) {
    return { error };
  }
};

export function* handleTweet() {
  while (true) {
    const action = yield take('TWEET');
    const { result, error } = yield call(
      tweet,
    );
    if (result === 'OK' && !error) {
      yield put(successTweet());
    } else {
      yield put(failureTweet());
    }
  }
}
