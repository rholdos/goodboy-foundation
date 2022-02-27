import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, FormCheck } from 'react-bootstrap';
import axios from 'axios';

import StyledStepTitle from '../styled/StepTitle';
import StyledFormGroup from '../styled/FormGroup';
import StyledFormFieldError from '../styled/FormFieldError';
import StyledButton from '../styled/Button';

import { setCurrentStep } from '../../redux/actions/stepActions';

const POST_CONTRIBUTION_URL = 'https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute';

const ThirdStep = () => {
  const currentStep = useSelector((state) => state.steps.current);
  const { type, shelter, amount } = useSelector((state) => state.contribution);
  const { firstName, lastName, email, phonePrefix, phoneNumber } = useSelector((state) => state.contributor);

  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!consent) errors.consent = 'Pre odoslanie príspevku musíte súhlasíť so spracovaním osobných údajov';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const dispatch = useDispatch();
  const previousStep = () => dispatch(setCurrentStep(currentStep - 1));
  const nextStep = () => {
    if (validate()) {
      axios
        .post(POST_CONTRIBUTION_URL, {
          shelterID: shelter?.id || undefined,
          value: amount.toString(),
          firstName,
          lastName,
          email,
          phone: `${phonePrefix} ${phoneNumber}`
        })
        .then((response) => {
          if (response.status === 200) setSubmitted(response.data.messages[0].message);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      {/* Title */}
      <StyledStepTitle>{submitted ? 'Ďakujeme' : 'Skontrolujte si zadané údaje'}</StyledStepTitle>
      {/* Success message */}
      {submitted && typeof submitted === 'string' && <p>{submitted}</p>}
      {/* Summary */}
      {!submitted && (
        <>
          {/* Values */}
          <h4 className='fs-sm fw-bold mb-half'>Akou formou chcem pomôcť</h4>
          <span className='d-block mb-1-half'>
            {type === 'organization' && 'Chcem finančne prispieť celej nadácii'}
            {type === 'shelter' && 'Chcem finančne prispieť konkrétnemu útulku'}
          </span>
          <h4 className='fs-sm fw-bold mb-half'>Najviac mi záleží na útulku</h4>
          <span className='d-block mb-1-half'>{shelter?.name || 'Nezvolené'}</span>
          <h4 className='fs-sm fw-bold mb-half'>Suma ktorou chcem pomôcť</h4>
          <span className='d-block mb-1-half'>{`${amount} €`}</span>
          <h4 className='fs-sm fw-bold mb-half'>Meno a priezvisko</h4>
          <span className='d-block mb-1-half'>{`${firstName} ${lastName}`}</span>
          <h4 className='fs-sm fw-bold mb-half'>E-mailová adresa</h4>
          <span className='d-block mb-1-half'>{email}</span>
          <h4 className='fs-sm fw-bold mb-half'>Telefónne číslo</h4>
          <span className='d-block mb-1-half'>
            {phoneNumber ? `${phonePrefix} ${phoneNumber.replace(/(\d{3})/g, '$1 ').trim()}` : 'Nezadané'}
          </span>
          {/* Consent checkbox */}
          <StyledFormGroup controlId='last-name' marginbottom={1}>
            <FormCheck
              type='checkbox'
              id='consent'
              label='Súhlasím so spracovaním mojich osobných údajov'
              autoComplete='off'
              checked={consent}
              onChange={() => setConsent(!consent)}
            />
            {errors.consent && <StyledFormFieldError>{errors.consent}</StyledFormFieldError>}
          </StyledFormGroup>
          {/* Step buttons */}
          <Row className='justify-content-between align-items-center mt-4'>
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
        </>
      )}
    </Form>
  );
};

export default ThirdStep;
