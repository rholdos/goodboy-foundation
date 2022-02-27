import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';

import StyledStepHeading from '../styled/StepHeading';
import StyledButton from '../styled/Button';

import { setCurrentStep } from '../../redux/actions/stepActions';

const FirstStep = () => {
  const currentStep = useSelector((state) => state.steps.current);
  const dispatch = useDispatch();
  const nextStep = () => {
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      {/* Heading */}
      <StyledStepHeading>Vyberte si možnosť, ako chcete pomôcť</StyledStepHeading>
      {/* Option radio buttons */}
      {/* Shelter select */}
      {/* Amount radio buttons */}
      {/* Step buttons */}
      <Row className='justify-content-end align-items-center'>
        <Col xs='auto'>
          <StyledButton type='button' variant='primary' onClick={() => nextStep()}>
            Pokračovať
          </StyledButton>
        </Col>
      </Row>
    </Form>
  );
};

export default FirstStep;
