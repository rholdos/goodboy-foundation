import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, FormLabel, FormSelect } from 'react-bootstrap';

import StyledStepHeading from '../styled/StepHeading';
import StyledOptionRadioButtons from '../styled/OptionRadioButtons';
import StyledFormGroup from '../styled/FormGroup';
import StyledAmountRadioButtons from '../styled/AmountRadioButtons';
import StyledButton from '../styled/Button';

import { ReactComponent as WalletIcon } from '../../icons/wallet.svg';
import { ReactComponent as PawIcon } from '../../icons/paw.svg';

import { setCurrentStep } from '../../redux/actions/stepActions';

const amounts = ['5', '10', '15', '20', '30', '50', '100'];

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
      <StyledOptionRadioButtons>
        <input type='radio' name='help' id='option' />
        <label htmlFor='option'>
          <span className='icon-wrapper'>
            <WalletIcon />
          </span>
          <span className='text'>Chcem finančne prispieť konkrétnemu útulku</span>
        </label>
        <input type='radio' name='help' id='foundation' />
        <label htmlFor='foundation'>
          <span className='icon-wrapper'>
            <PawIcon />
          </span>
          <span className='text'>Chcem finančne prispieť celej nadácii</span>
        </label>
      </StyledOptionRadioButtons>
      {/* Shelter select */}
      <Row className='justify-content-between align-items-center mb-half'>
        <Col xs='auto'>
          <span className='fw-bold'>O projekte</span>
        </Col>
        <Col xs='auto'>
          <span className='fs-sm fw-bold'>Nepovinné</span>
        </Col>
      </Row>
      <StyledFormGroup controlId='shelter' marginbottom={2.5}>
        <FormLabel>Útulok</FormLabel>
        <FormSelect>
          <option value={null}>Vyberte útulok zo zoznamu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </FormSelect>
      </StyledFormGroup>
      {/* Amount radio buttons */}
      <span className='d-block fw-bold mb-half'>Suma, ktorou chcem prispieť</span>
      <StyledAmountRadioButtons>
        {amounts.map((amount, index) => (
          <Fragment key={index}>
            <input type='radio' name='amount' id={amount} />
            <label htmlFor={amount}>{`${amount} €`}</label>
          </Fragment>
        ))}
        <input
          type='radio'
          name='amount'
          id='custom'
          onChange={(event) => event.target.nextElementSibling.querySelector('input#custom-value').focus()}
        />
        <label htmlFor='custom'>
          <input type='number' id='custom-value' /> €
        </label>
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
