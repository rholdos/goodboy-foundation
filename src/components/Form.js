import { useSelector } from 'react-redux';

import FirstStep from './form-steps/FirstStep';
import SecondStep from './form-steps/SecondStep';
import ThirdStep from './form-steps/ThirdStep';

const Content = () => {
  const currentStep = useSelector((state) => state.steps.current);
  return (
    <>
      {currentStep === 1 && <FirstStep />}
      {currentStep === 2 && <SecondStep />}
      {currentStep === 3 && <ThirdStep />}
    </>
  );
};

export default Content;
