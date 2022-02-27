import actionTypes from '../constants/actionTypes';

export const setCurrentStep = (step) => {
  return {
    type: actionTypes.SET_CURRENT_STEP,
    payload: step
  };
};
