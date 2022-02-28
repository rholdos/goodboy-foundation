import { useSelector } from 'react-redux';

import Contribution from './form-steps/Contribution';
import Contributor from './form-steps/Contributor';
import Summary from './form-steps/Summary';

const Content = () => {
  const currentStep = useSelector((state) => state.steps.current);
  return (
    <>
      {currentStep === 1 && <Contribution />}
      {currentStep === 2 && <Contributor />}
      {currentStep === 3 && <Summary />}
    </>
  );
};

export default Content;
