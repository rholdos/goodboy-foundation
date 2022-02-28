import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Form, Row, Col, FormLabel, FormSelect } from 'react-bootstrap';
import axios from 'axios';

import StyledStepTitle from '../styled/StepTitle';
import StyledTypeRadioButtons from '../styled/TypeRadioButtons';
import StyledFormGroup from '../styled/FormGroup';
import StyledAmountRadioButtons from '../styled/AmountRadioButtons';
import StyledFormError from '../styled/FormError';
import StyledLink from '../styled/Link';

import { ReactComponent as WalletIcon } from '../../icons/wallet.svg';
import { ReactComponent as PawIcon } from '../../icons/paw.svg';

import { setCurrentStep } from '../../redux/actions/stepActions';
import { setContribution } from '../../redux/actions/contributionActions';

const GET_SHELTERS_URL = 'https://frontend-assignment-api.goodrequest.dev/api/v1/shelters';
const FIXED_AMOUNTS = [5, 10, 15, 20, 30, 50, 100];

const Contribution = () => {
  const { t } = useTranslation();

  const currentStep = useSelector((state) => state.steps.current);
  const contributionData = useSelector((state) => state.contribution);

  const initialAmountType = contributionData.amount
    ? FIXED_AMOUNTS.includes(contributionData.amount)
      ? 'fixed'
      : 'custom'
    : 'fixed';

  const [availableShelters, setAvailableShelters] = useState([]);
  const [type, setType] = useState(contributionData.type || 'organization');
  const [shelter, setShelter] = useState(contributionData.shelter?.id || undefined);
  const [amountType, setAmountType] = useState(initialAmountType);
  const [amount, setAmount] = useState(contributionData.amount || 50);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!['organization', 'shelter'].includes(type)) errors.type = t('typeError');
    if (type === 'shelter' && !availableShelters.map((shelter) => shelter.id).includes(shelter))
      errors.shelter = t('shelterError');
    if (amountType === 'fixed' && !FIXED_AMOUNTS.includes(amount)) errors.amount = t('fixedAmountError');
    if (amountType === 'custom' && (!amount || +amount < 1)) errors.amount = t('customAmountError');
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const dispatch = useDispatch();
  const nextStep = (event) => {
    if (validate()) {
      const selectedShelter = availableShelters.find((item) => item.id === shelter) || undefined;
      dispatch(setContribution({ type, shelter: selectedShelter, amount }));
      dispatch(setCurrentStep(currentStep + 1));
    } else {
      event.preventDefault();
    }
  };

  useEffect(() => {
    axios
      .get(GET_SHELTERS_URL)
      .then((response) => {
        if (response.data.shelters) {
          setAvailableShelters(response.data.shelters);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      {/* Title */}
      <StyledStepTitle>{t('contributionTitle')}</StyledStepTitle>
      {/* Type radio buttons */}
      <StyledTypeRadioButtons>
        <input
          type='radio'
          name='type'
          id='shelter'
          value='shelter'
          checked={type === 'shelter'}
          onChange={(event) => setType(event.target.value)}
        />
        <label htmlFor='shelter'>
          <span className='icon-wrapper'>
            <WalletIcon />
          </span>
          <span className='text'>{t('typeShelterLabel')}</span>
        </label>
        <input
          type='radio'
          name='type'
          id='foundation'
          value='organization'
          checked={type === 'organization'}
          onChange={(event) => {
            setType(event.target.value);
            setShelter(undefined);
          }}
        />
        <label htmlFor='foundation'>
          <span className='icon-wrapper'>
            <PawIcon />
          </span>
          <span className='text'>{t('typeOrganizationLabel')}</span>
        </label>
        {errors.type && <StyledFormError>{errors.type}</StyledFormError>}
      </StyledTypeRadioButtons>
      {/* Shelter select */}
      <Row className='justify-content-between align-items-center mb-half'>
        <Col xs='auto'>
          <span className='fw-bold'>{t('aboutProject')}</span>
        </Col>
        <Col xs='auto'>
          <span className='fs-sm fw-bold'>{t(type === 'organization' ? 'notRequired' : 'required')}</span>
        </Col>
      </Row>
      <StyledFormGroup controlId='shelter' marginbottom={2.5}>
        <FormLabel>Útulok</FormLabel>
        <FormSelect value={shelter} onChange={(event) => setShelter(+event.target.value)}>
          <option value={undefined}>{t('shelterLabel')}</option>
          {availableShelters.map((shelter) => (
            <option key={`shelter-${shelter.id}`} value={shelter.id}>
              {shelter.name}
            </option>
          ))}
        </FormSelect>
        {errors.shelter && <StyledFormError>{errors.shelter}</StyledFormError>}
      </StyledFormGroup>
      {/* Amount radio buttons */}
      <span className='d-block fw-bold mb-half'>{t('amountLabel')}</span>
      <StyledAmountRadioButtons>
        {FIXED_AMOUNTS.map((value, index) => {
          return (
            <Fragment key={index}>
              <input
                type='radio'
                name='amount'
                id={`amount-${value}`}
                value={value}
                checked={amountType === 'fixed' && amount === +value}
                onChange={(event) => {
                  setAmountType('fixed');
                  setAmount(+event.target.value);
                }}
              />
              <label htmlFor={`amount-${value}`}>{`${value} €`}</label>
            </Fragment>
          );
        })}
        <input
          type='radio'
          name='amount'
          id='custom'
          value='custom'
          checked={amountType === 'custom'}
          onChange={(event) => {
            setAmountType('custom');
            setAmount('');
            event.target.nextElementSibling.querySelector('input').focus();
          }}
        />
        <label htmlFor='custom'>
          <input
            type='number'
            id='custom-value'
            value={amountType === 'custom' ? amount : ''}
            onChange={(event) => setAmount(+event.target.value)}
          />
          {` €`}
        </label>
        {errors.amount && <StyledFormError>{errors.amount}</StyledFormError>}
      </StyledAmountRadioButtons>
      {/* Step buttons */}
      <Row className='justify-content-end align-items-center mt-3'>
        <Col xs='auto'>
          <StyledLink to='/contributor' variant='primary' onClick={(event) => nextStep(event)}>
            {t('continue')}
          </StyledLink>
        </Col>
      </Row>
    </Form>
  );
};

export default Contribution;
