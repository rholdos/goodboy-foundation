import actionTypes from '../constants/actionTypes';

export const setContribution = (contributionDataObject) => {
  return {
    type: actionTypes.SET_CONTRIBUTION,
    payload: contributionDataObject
  };
};
