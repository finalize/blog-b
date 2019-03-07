import {
  HELLO_WORLD,
} from '../constants/actionTypes';

const initialState = {
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HELLO_WORLD:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
