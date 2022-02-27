import actionTypes from '../constants/actionTypes';

const initialState = 0;

export const shelterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_SHELTER:
      return Object.assign({}, state, { ...payload });
    default:
      return state;
  }
};
