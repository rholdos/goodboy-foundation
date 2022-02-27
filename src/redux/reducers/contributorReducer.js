import actionTypes from '../constants/actionTypes';

const initialState = {
  name: undefined,
  email: undefined,
  phone: undefined
};

export const contributorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CONTRIBUTOR:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
