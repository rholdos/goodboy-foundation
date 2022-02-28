import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Row, Col, FormCheck } from 'react-bootstrap';
import axios from 'axios';

import StyledStepTitle from '../styled/StepTitle';
import StyledFormGroup from '../styled/FormGroup';
import StyledFormFieldError from '../styled/FormFieldError';
import StyledButton from '../styled/Button';

import { setCurrentStep } from '../../redux/actions/stepActions';

const POST_CONTRIBUTION_URL = 'https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute';

const ThirdStep = () => {
  const { t } = useTranslation();

  const currentStep = useSelector((state) => state.steps.current);
  const { type, shelter, amount } = useSelector((state) => state.contribution);
  const { firstName, lastName, email, phonePrefix, phoneNumber } = useSelector((state) => state.contributor);

  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!consent) errors.consent = t('consentError');
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
      <StyledStepTitle>{submitted ? t('summaryTitleSubmitted') : t('summaryTitleNotSubmitted')}</StyledStepTitle>
      {/* Success message */}
      {submitted && typeof submitted === 'string' && <p>{submitted}</p>}
      {/* Summary */}
      {!submitted && (
        <>
          {/* Values */}
          <h4 className='fs-sm fw-bold mb-half'>{t('summaryType')}</h4>
          <span className='d-block mb-1-half'>
            {type === 'shelter' && t('summaryTypeShelter')}
            {type === 'organization' && t('summaryTypeOrganization')}
          </span>
          <h4 className='fs-sm fw-bold mb-half'>{t('summaryShelter')}</h4>
          <span className='d-block mb-1-half'>{shelter?.name || t('notSelected')}</span>
          <h4 className='fs-sm fw-bold mb-half'>{t('summaryAmount')}</h4>
          <span className='d-block mb-1-half'>{`${amount} €`}</span>
          <h4 className='fs-sm fw-bold mb-half'>{t('summaryName')}</h4>
          <span className='d-block mb-1-half'>{`${firstName} ${lastName}`}</span>
          <h4 className='fs-sm fw-bold mb-half'>{t('summaryEmail')}</h4>
          <span className='d-block mb-1-half'>{email}</span>
          <h4 className='fs-sm fw-bold mb-half'>{t('summaryPhone')}</h4>
          <span className='d-block mb-1-half'>
            {phoneNumber ? `${phonePrefix} ${phoneNumber.replace(/(\d{3})/g, '$1 ').trim()}` : t('notProvided')}
          </span>
          {/* Consent checkbox */}
          <StyledFormGroup controlId='last-name' marginbottom={1}>
            <FormCheck
              type='checkbox'
              id='consent'
              label={t('consentLabel')}
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
                {t('back')}
              </StyledButton>
            </Col>
            <Col xs='auto'>
              <StyledButton type='submit' variant='primary' onClick={() => nextStep()}>
                {t('submit')}
              </StyledButton>
            </Col>
          </Row>
        </>
      )}
    </Form>
  );
};

export default ThirdStep;
