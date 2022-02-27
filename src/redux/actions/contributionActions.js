import actionTypes from '../constants/actionTypes';

export const setConribution = (contributionDataObject) => {
  return {
    type: actionTypes.SET_CONTRIBUTION,
    payload: contributionDataObject
  };
};
