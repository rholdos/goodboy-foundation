import actionTypes from '../constants/actionTypes';

export const setShelter = (shelter) => {
  return {
    type: actionTypes.SET_SHELTER,
    payload: shelter
  };
};
