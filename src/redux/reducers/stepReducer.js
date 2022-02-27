import actionTypes from '../constants/actionTypes';

const initialState = {
  total: 4,
  current: 1
};

export const stepReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CURRENT_STEP:
      return Object.assign({}, state, { current: payload })
    default:
      return state;
  }
};
