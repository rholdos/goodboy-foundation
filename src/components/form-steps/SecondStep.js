import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, FormLabel, FormControl } from 'react-bootstrap';

import StyledStepHeading from '../styled/StepHeading';
import StyledFormGroup from '../styled/FormGroup';
import StyledButton from '../styled/Button';

import { ReactComponent as FlagSKIcon } from '../../icons/flag-sk.svg';
import { ReactComponent as FlagCZIcon } from '../../icons/flag-cz.svg';

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
      <span className='d-block fw-bold mb-half'>O vás</span>
      {/* First name input */}
      <StyledFormGroup controlId='first-name' marginbottom={1}>
        <FormLabel>Meno</FormLabel>
        <FormControl type='text' placeholder='Zadajte Vaše meno' />
      </StyledFormGroup>
      {/* Last name input */}
      <StyledFormGroup controlId='last-name' marginbottom={1}>
        <FormLabel>Priezvisko</FormLabel>
        <FormControl type='text' placeholder='Zadajte Vaše priezvisko' />
      </StyledFormGroup>
      {/* Email input */}
      <StyledFormGroup controlId='email' marginbottom={1}>
        <FormLabel>E-mailová adresa</FormLabel>
        <FormControl type='email' placeholder='Zadajte Váš e-mail' />
      </StyledFormGroup>
      {/* Phone input */}
      <StyledFormGroup controlId='phone' marginbottom={1} withphoneprefix='true'>
        <FormLabel>Telefónne číslo</FormLabel>
        <span className='flag-prefix'>
          <FlagSKIcon /> +421
        </span>
        <FormControl type='tel' />
        {/* TODO */}
        {/* <select>
          <option value="+421">
            Slovenské číslo
            <FlagSKIcon />
          </option>
          <option value="+420">
            České číslo
            <FlagCZIcon />
          </option>
        </select> */}
      </StyledFormGroup>
      {/* Step buttons */}
      <Row className='justify-content-between align-items-center mt-4'>
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
