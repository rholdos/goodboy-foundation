import actionTypes from '../constants/actionTypes';

const initialState = {
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  phonePrefix: undefined,
  phoneNumber: undefined
};

export const contributorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CONTRIBUTOR:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
