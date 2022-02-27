import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, FormLabel, FormSelect } from 'react-bootstrap';
import axios from 'axios';

import StyledStepHeading from '../styled/StepHeading';
import StyledTypeRadioButtons from '../styled/TypeRadioButtons';
import StyledFormGroup from '../styled/FormGroup';
import StyledAmountRadioButtons from '../styled/AmountRadioButtons';
import StyledFormFieldError from '../styled/FormFieldError';
import StyledButton from '../styled/Button';

import { ReactComponent as WalletIcon } from '../../icons/wallet.svg';
import { ReactComponent as PawIcon } from '../../icons/paw.svg';

import { setCurrentStep } from '../../redux/actions/stepActions';
import { setContribution } from '../../redux/actions/contributionActions';

const GET_SHELTERS_URL = 'https://frontend-assignment-api.goodrequest.dev/api/v1/shelters';
const FIXED_AMOUNTS = [5, 10, 15, 20, 30, 50, 100];

const FirstStep = () => {
  const currentStep = useSelector((state) => state.steps.current);
  const contributionData = useSelector((state) => state.contribution);

  const initialAmountType = contributionData.amount
    ? FIXED_AMOUNTS.includes(contributionData.amount)
      ? 'fixed'
      : 'custom'
    : 'fixed';

  const [availableShelters, setAvailableShelters] = useState([]);
  const [type, setType] = useState(contributionData.type || 'organization');
  const [shelter, setShelter] = useState(contributionData.shelter || undefined);
  const [amountType, setAmountType] = useState(initialAmountType);
  const [amount, setAmount] = useState(contributionData.amount || 50);

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

  const dispatch = useDispatch();
  const nextStep = () => {
    if (!['organization', 'shelter'].includes(type)) return setType('error');
    if (type === 'shelter') {
      let availableSheltersIds = availableShelters.map((shelter) => shelter.id);
      if (!availableSheltersIds.includes(shelter)) {
        return setShelter('error');
      }
    }
    if (amountType === 'fixed' && !FIXED_AMOUNTS.includes(amount)) return setAmount('error');
    if (amountType === 'custom' && (!amount || +amount < 1)) return setAmount('error');
    dispatch(setContribution({ type, shelter, amount }));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      {/* Heading */}
      <StyledStepHeading>Vyberte si možnosť, ako chcete pomôcť</StyledStepHeading>
      {/* Type radio buttons */}
      <StyledTypeRadioButtons>
        <input
          type='radio'
          name='help'
          id='type'
          value='shelter'
          checked={type === 'shelter'}
          onChange={(event) => setType(event.target.value)}
        />
        <label htmlFor='type'>
          <span className='icon-wrapper'>
            <WalletIcon />
          </span>
          <span className='text'>Chcem finančne prispieť konkrétnemu útulku</span>
        </label>
        <input
          type='radio'
          name='help'
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
          <span className='text'>Chcem finančne prispieť celej nadácii</span>
        </label>
        {type === 'error' && <StyledFormFieldError>Zvoľte typ príspevku</StyledFormFieldError>}
      </StyledTypeRadioButtons>
      {/* Shelter select */}
      <Row className='justify-content-between align-items-center mb-half'>
        <Col xs='auto'>
          <span className='fw-bold'>O projekte</span>
        </Col>
        <Col xs='auto'>
          <span className='fs-sm fw-bold'>{type === 'organization' ? 'Nepovinné' : 'Povinné'}</span>
        </Col>
      </Row>
      <StyledFormGroup controlId='shelter' marginbottom={2.5}>
        <FormLabel>Útulok</FormLabel>
        <FormSelect
          value={shelter}
          onChange={(event) => setShelter(+event.target.value)}
        >
          <option value={0}>Vyberte útulok zo zoznamu</option>
          {availableShelters.map((shelter) => (
            <option key={shelter.id} value={+shelter.id}>
              {shelter.name}
            </option>
          ))}
        </FormSelect>
        {shelter === 'error' && <StyledFormFieldError>Zvoľte útulok</StyledFormFieldError>}
      </StyledFormGroup>
      {/* Amount radio buttons */}
      <span className='d-block fw-bold mb-half'>Suma, ktorou chcem prispieť</span>
      <StyledAmountRadioButtons>
        {FIXED_AMOUNTS.map((value, index) => {
          return (
            <Fragment key={index}>
              <input
                type='radio'
                name='amount'
                id={`amount-${value}`}
                value={+value}
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
          />{' '}
          €
        </label>
        {amountType === 'fixed' && amount === 'error' && <StyledFormFieldError>Zvoľte sumu</StyledFormFieldError>}
        {amountType === 'custom' && amount === 'error' && <StyledFormFieldError>Zadajte sumu</StyledFormFieldError>}
      </StyledAmountRadioButtons>
      {/* Step buttons */}
      <Row className='justify-content-end align-items-center mt-4'>
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
