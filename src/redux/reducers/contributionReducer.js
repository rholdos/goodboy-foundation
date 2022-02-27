import actionTypes from '../constants/actionTypes';

const initialState = {
  type: undefined,
  shelter: undefined,
  amount: undefined
};

export const contributionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CONTRIBUTION:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
