import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, FormLabel, FormControl } from 'react-bootstrap';

import StyledStepHeading from '../styled/StepHeading';
import StyledFormGroup from '../styled/FormGroup';
import StyledFormFieldError from '../styled/FormFieldError';
import StyledButton from '../styled/Button';

import { ReactComponent as FlagSKIcon } from '../../icons/flag-sk.svg';
import { ReactComponent as FlagCZIcon } from '../../icons/flag-cz.svg';

import { setCurrentStep } from '../../redux/actions/stepActions';
import { setContributor } from '../../redux/actions/contributorActions';

const SK_PHONE_PREFIX = '+421';
const CZ_PHONE_PREFIX = '+420';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{0,9}$/;

const SecondStep = () => {
  const currentStep = useSelector((state) => state.steps.current);
  const contributorData = useSelector((state) => state.contributor);

  const [firstName, setFirstName] = useState(contributorData.firstName || undefined);
  const [lastName, setLastName] = useState(contributorData.lastName || undefined);
  const [email, setEmail] = useState(contributorData.email || undefined);
  const [phonePrefix, setPhonePrefix] = useState(contributorData.phonePrefix || SK_PHONE_PREFIX);
  const [phoneNumber, setPhoneNumber] = useState(contributorData.phoneNumber || undefined);

  const dispatch = useDispatch();
  const previousStep = () => dispatch(setCurrentStep(currentStep - 1));
  const nextStep = () => {
    if (!firstName) return setFirstName('error');
    if (!lastName) return setLastName('error');
    if (!EMAIL_REGEX.test(email)) return setEmail('error');
    if (!PHONE_REGEX.test(phoneNumber)) return setPhoneNumber('error');
    dispatch(setContributor({ firstName, lastName, email, phonePrefix, phoneNumber }));
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
        <FormControl
          type='text'
          placeholder='Zadajte Vaše meno'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        {firstName === 'error' && <StyledFormFieldError>Zadajte Vaše meno</StyledFormFieldError>}
      </StyledFormGroup>
      {/* Last name input */}
      <StyledFormGroup controlId='last-name' marginbottom={1}>
        <FormLabel>Priezvisko</FormLabel>
        <FormControl
          type='text'
          placeholder='Zadajte Vaše priezvisko'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        {lastName === 'error' && <StyledFormFieldError>Zadajte Vaše priezvisko</StyledFormFieldError>}
      </StyledFormGroup>
      {/* Email input */}
      <StyledFormGroup controlId='email' marginbottom={1}>
        <FormLabel>E-mailová adresa</FormLabel>
        <FormControl
          type='email'
          placeholder='Zadajte Váš e-mail'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {email === 'error' && <StyledFormFieldError>Zadajte Váš e-mail</StyledFormFieldError>}
      </StyledFormGroup>
      {/* Phone input */}
      <StyledFormGroup controlId='phone-number' marginbottom={1} withphoneprefix='true'>
        <FormLabel>Telefónne číslo</FormLabel>
        <FormControl type='tel' value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        <div className="phone-prefix">
          <label htmlFor='phone-prefix'>
            {phonePrefix === SK_PHONE_PREFIX && (
              <>
                <FlagSKIcon />
                <span>{SK_PHONE_PREFIX}</span>
              </>
            )}
            {phonePrefix === CZ_PHONE_PREFIX && (
              <>
                <FlagCZIcon />
                <span>{CZ_PHONE_PREFIX}</span>
              </>
            )}
          </label>
          <select id='phone-prefix' value={phonePrefix} onChange={(event) => {
            setPhonePrefix(event.target.value);
            event.target.previousElementSibling.parentElement.previousElementSibling.focus();
          }}>
            <option value={SK_PHONE_PREFIX}>Slovenské číslo</option>
            <option value={CZ_PHONE_PREFIX}>České číslo</option>
          </select>
        </div>
        {phoneNumber === 'error' && <StyledFormFieldError>Zadajte Vaše telefónne číslo</StyledFormFieldError>}
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
