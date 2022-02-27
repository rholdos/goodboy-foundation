import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';

import StyledStepHeading from '../styled/StepHeading';
import StyledButton from '../styled/Button';

import { setCurrentStep } from '../../redux/actions/stepActions';

const ThirdStep = () => {
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
      <StyledStepHeading>Skontrolujte si zadané údaje</StyledStepHeading>
      {/* Step buttons */}
      <Row className='justify-content-between align-items-center'>
        <Col xs='auto'>
          <StyledButton type='button' variant='secondary' onClick={() => previousStep()}>
            Späť
          </StyledButton>
        </Col>
        <Col xs='auto'>
          <StyledButton type='submit' variant='primary' onClick={() => nextStep()}>
            Odoslať formulár
          </StyledButton>
        </Col>
      </Row>
    </Form>
  );
};

export default ThirdStep;
