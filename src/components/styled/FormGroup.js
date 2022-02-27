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
