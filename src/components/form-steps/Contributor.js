import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Row, Col, FormLabel, FormControl } from 'react-bootstrap';

import StyledStepTitle from '../styled/StepTitle';
import StyledFormGroup from '../styled/FormGroup';
import StyledFormError from '../styled/FormError';
import StyledButton from '../styled/Button';

import { ReactComponent as FlagSKIcon } from '../../icons/flag-sk.svg';
import { ReactComponent as FlagCZIcon } from '../../icons/flag-cz.svg';

import { setCurrentStep } from '../../redux/actions/stepActions';
import { setContributor } from '../../redux/actions/contributorActions';

const SK_PHONE_PREFIX = '+421';
const CZ_PHONE_PREFIX = '+420';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{9}$/;

const Contributor = () => {
  const { t } = useTranslation();

  const currentStep = useSelector((state) => state.steps.current);
  const contributorData = useSelector((state) => state.contributor);

  const [firstName, setFirstName] = useState(contributorData.firstName || undefined);
  const [lastName, setLastName] = useState(contributorData.lastName || undefined);
  const [email, setEmail] = useState(contributorData.email || undefined);
  const [phonePrefix, setPhonePrefix] = useState(contributorData.phonePrefix || SK_PHONE_PREFIX);
  const [phoneNumber, setPhoneNumber] = useState(contributorData.phoneNumber || undefined);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!firstName) errors.firstName = t('firstNameError');
    if (!lastName) errors.lastName = t('lastNameError');
    if (!EMAIL_REGEX.test(email)) errors.email = t('emailError');
    if (![SK_PHONE_PREFIX, CZ_PHONE_PREFIX].includes(phonePrefix)) errors.phonePrefix = t('phonePrefixError');
    if (phoneNumber && !PHONE_REGEX.test(phoneNumber)) errors.phoneNumber = t('phoneNumberError');
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const dispatch = useDispatch();
  const previousStep = () => dispatch(setCurrentStep(currentStep - 1));
  const nextStep = () => {
    if (validate()) {
      dispatch(setContributor({ firstName, lastName, email, phonePrefix, phoneNumber }));
      dispatch(setCurrentStep(currentStep + 1));
    }
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      {/* Title */}
      <StyledStepTitle>{t('contributorTitle')}</StyledStepTitle>
      <span className='d-block fw-bold mb-half'>{t('contributorSubtite')}</span>
      {/* First name input */}
      <StyledFormGroup controlId='first-name' marginbottom={1}>
        <FormLabel>{t('firstNameLabel')}</FormLabel>
        <FormControl
          type='text'
          placeholder={t('firstNamePlaceholder')}
          autoComplete='given-name'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        {errors.firstName && <StyledFormError>{errors.firstName}</StyledFormError>}
      </StyledFormGroup>
      {/* Last name input */}
      <StyledFormGroup controlId='last-name' marginbottom={1}>
        <FormLabel>{t('lastNameLabel')}</FormLabel>
        <FormControl
          type='text'
          placeholder={t('lastNamePlaceholder')}
          autoComplete='family-name'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        {errors.lastName && <StyledFormError>{errors.lastName}</StyledFormError>}
      </StyledFormGroup>
      {/* Email input */}
      <StyledFormGroup controlId='email' marginbottom={1}>
        <FormLabel>{t('emailLabel')}</FormLabel>
        <FormControl
          type='email'
          placeholder={t('emailPlaceholder')}
          autoComplete='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <StyledFormError>{errors.email}</StyledFormError>}
      </StyledFormGroup>
      {/* Phone input */}
      <StyledFormGroup controlId='phone-number' marginbottom={1} withphoneprefix='true'>
        <FormLabel>{t('phoneNumberLabel')}</FormLabel>
        <FormControl
          type='tel'
          autoComplete='tel'
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <div className='phone-prefix'>
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
          <select
            id='phone-prefix'
            value={phonePrefix}
            onChange={(event) => {
              setPhonePrefix(event.target.value);
              event.target.previousElementSibling.parentElement.previousElementSibling.focus();
            }}
          >
            <option value={SK_PHONE_PREFIX}>{t('skNumberOption')}</option>
            <option value={CZ_PHONE_PREFIX}>{t('czNumberOption')}</option>
          </select>
        </div>
        {errors.phoneNumber && <StyledFormError>{errors.phoneNumber}</StyledFormError>}
      </StyledFormGroup>
      {/* Step buttons */}
      <Row className='justify-content-between align-items-center mt-3'>
        <Col xs='auto'>
          <StyledButton type='button' variant='secondary' onClick={() => previousStep()}>
            {t('back')}
          </StyledButton>
        </Col>
        <Col xs='auto'>
          <StyledButton type='submit' variant='primary' onClick={() => nextStep()}>
            {t('continue')}
          </StyledButton>
        </Col>
      </Row>
    </Form>
  );
};

export default Contributor;
