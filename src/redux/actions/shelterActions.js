import actionTypes from '../constants/actionTypes';

export const setShelters = (sheltersArray) => {
  return {
    type: actionTypes.SET_SHELTERS,
    payload: sheltersArray
  };
};

export const setSelectedShelter = (shelterId) => {
  return {
    type: actionTypes.SET_SELECTED_SHELTER,
    payload: shelterId
  };
};
