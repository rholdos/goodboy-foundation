import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';

import StyledStepHeading from '../styled/StepHeading';
import StyledButton from '../styled/Button';

import { setCurrentStep } from '../../redux/actions/stepActions';

const SecondStep = () => {
  const currentStep = useSelector((state) => state.steps.current);
  const dispatch = useDispatch();
  const previousStep = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };
  const nextStep = () => {
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      {/* Heading */}
      <StyledStepHeading>Potrebujeme od Vás zopár informácií</StyledStepHeading>
      {/* First name input */}
      {/* Last name input */}
      {/* Email input */}
      {/* Phone input */}
      {/* Step buttons */}
      <Row className='justify-content-between align-items-center'>
        <Col xs='auto'>
          <StyledButton type='button' variant='secondary' onClick={() => previousStep()}>
            Späť
          </StyledButton>
        </Col>
        <Col xs='auto'>
          <StyledButton type='button' variant='primary' onClick={() => nextStep()}>
            Pokračovať
          </StyledButton>
        </Col>
      </Row>
    </Form>
  );
};

export default SecondStep;
