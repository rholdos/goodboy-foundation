import actionTypes from '../constants/actionTypes';

const initialState = {
  total: 3,
  current: 1
};

export const stepReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CURRENT_STEP:
      if (payload >= 1 && payload <= initialState.total) {
        return Object.assign({}, state, { current: payload })
      }
      break;
    default:
      return state;
  }
};
