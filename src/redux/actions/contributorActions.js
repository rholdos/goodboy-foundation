import actionTypes from '../constants/actionTypes';

export const setConribution = (contributorDataObject) => {
  return {
    type: actionTypes.SET_CONTRIBUTOR,
    payload: contributorDataObject
  };
};
