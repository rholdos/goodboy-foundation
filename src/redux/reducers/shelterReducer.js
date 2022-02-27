import actionTypes from '../constants/actionTypes';

const initialState = {
  list: [],
  selected: null
};

export const shelterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_SHELTERS:
      return Object.assign({}, state, { list: payload });
    case actionTypes.SET_SELECTED_SHELTER:
      return Object.assign({}, state, { selected: payload });
    default:
      return state;
  }
};
