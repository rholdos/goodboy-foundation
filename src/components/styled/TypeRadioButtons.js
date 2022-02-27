import styled from 'styled-components';

const StyledTypeRadioButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;

  input[type='radio'] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
  }

  label {
    flex: 1 1 0;
    background: var(--grey-light);
    padding: 1.5rem 3.5rem 1.5rem 1.5rem;
    border: solid 1px var(--primary-light);
    transition: color var(--transition), background var(--transition), box-shadow var(--transition);
    cursor: pointer;

    &:first-of-type {
      border-radius: 1.5rem 0 0 1.5rem;
    }

    &:last-of-type {
      border-radius: 0 1.5rem 1.5rem 0;
      margin-left: -1px;
    }

    .icon-wrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: var(--grey);
      padding: 1.5rem;
      border-radius: 50%;
      margin-bottom: 1rem;
      transition: background var(--transition);

      .icon {
        font-size: 1.75rem;
        color: var(--grey-dark);
        transition: color var(--transition);
      }
    }

    .text {
      display: block;
      font-weight: 600;
      line-height: 1.3;
      user-select: none;
    }
  }

  input:checked + label {
    color: var(--white);
    background: var(--gradint-vertical-primary);
    box-shadow: var(--box-shadow);

    .icon-wrapper {
      background: rgba(18, 18, 18, 0.15);

      .icon {
        color: var(--white);
      }
    }
  }
`;

export default StyledTypeRadioButtons;
