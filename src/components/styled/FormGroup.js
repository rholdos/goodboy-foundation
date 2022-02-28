import styled, { css } from 'styled-components';
import { FormGroup } from 'react-bootstrap';

const StyledFormGroup = styled(FormGroup)`
  position: relative;
  margin-bottom: ${(props) => `${props.marginbottom}rem`};

  .form-label {
    position: absolute;
    z-index: 1;
    top: 0.85rem;
    left: 1.5rem;
    right: 1.5rem;
    font-weight: 800;
    margin-bottom: 0;
    pointer-events: none;
  }

  .form-control,
  .form-select {
    padding: ${(props) => (props.withphoneprefix ? '2.25rem 1.5rem 0.75rem 6.25rem' : '2.25rem 1.5rem 0.75rem 1.5rem')};
    border-color: var(--grey);
    border-radius: 0.5rem;

    &:focus {
      box-shadow: 0 0 0 1px var(--primary-light);
    }
  }

  .form-check {
    display: flex;
    align-items: center;
    padding: 0;
  }

  .form-check-input {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    border-color: var(--grey);
    border-radius: 0.5rem;
    margin: 0 1rem 0 0;

    &:focus, &:active {
      box-shadow: 0 0 0 1px var(--primary-light);
    }

    &:checked {
      background-color: transparent;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M5.33,13.78a.93.93,0,0,1-.63-.26L.26,9.07a.88.88,0,0,1,0-1.25.89.89,0,0,1,1.26,0l3.81,3.81,9.15-9.15a.91.91,0,0,1,1.26,0,.89.89,0,0,1,0,1.26L6,13.52A.89.89,0,0,1,5.33,13.78Z' style='fill: %23cd8b65'/%3E%3C/svg%3E%0A");
      background-size: 60%;
    }
  }

  ${(props) =>
    props.withphoneprefix &&
    css`
      .phone-prefix {
        position: absolute;
        top: 2.3125rem;
        left: 1.5rem;
        display: inline-flex;

        label {
          color: var(--grey-dark);

          .icon {
            font-size: 1.5rem;
            margin-right: 0.75rem;
            transform: translateY(-2px);
          }
        }

        select {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          opacity: 0;
          border: none;
          cursor: pointer;
        }
      }
    `};
`;

export default StyledFormGroup;
