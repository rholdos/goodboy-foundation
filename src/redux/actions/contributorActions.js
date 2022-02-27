import actionTypes from '../constants/actionTypes';

export const setContributor = (contributorDataObject) => {
  return {
    type: actionTypes.SET_CONTRIBUTOR,
    payload: contributorDataObject
  };
};
