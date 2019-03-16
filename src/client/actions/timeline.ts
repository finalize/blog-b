import {
  TWEET,
  SUCCESS_TWEET,
  FAILURE_TWEET,
} from '../constants/actionTypes';

export const tweet = () => ({
  type: TWEET,
});

export const successTweet = () => ({
  type: SUCCESS_TWEET,
});

export const failureTweet = () => ({
  type: FAILURE_TWEET,
});
