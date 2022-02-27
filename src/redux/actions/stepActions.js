import actionTypes from '../constants/actionTypes';

export const setCurrentStep = (stepNumber) => {
  return {
    type: actionTypes.SET_CURRENT_STEP,
    payload: stepNumber
  };
};
