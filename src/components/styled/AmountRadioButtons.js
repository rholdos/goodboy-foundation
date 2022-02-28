import styled from 'styled-components';

const StyledAmountRadioButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  input[type='radio'] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
  }

  label {
    white-space: nowrap;
    font-weight: bold;
    line-height: 1.15;
    padding: 1rem;
    border: solid 1px var(--grey);
    border-radius: 0.5rem;
    margin-bottom: 0.375rem;
    transition: color var(--transition), background var(--transition), border-color var(--transition);
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: 0.375rem;
    }
  }

  label > input[type='number'] {
    width: 2.5rem;
    font-weight: inherit;
    color: inherit;
    background: transparent;
    padding: 0 0.125rem;
    border-style: solid;
    border-color: var(--grey);
    border-width: 0 0 1px 0;
    outline: none;
    pointer-events: none;
    -moz-appearance:textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input:checked + label {
    color: var(--white);
    border-color: var(--primary-light);
    background: var(--gradint-vertical-primary);

    > input[type='number'] {
      pointer-events: auto;
    }
  }
`;

export default StyledAmountRadioButtons;
