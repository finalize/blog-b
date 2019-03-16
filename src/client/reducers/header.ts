import {
  TWEET,
} from '../constants/actionTypes';

const initialState = {
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TWEET:
      console.log(action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
