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
    padding: ${(props) => (props.withphoneprefix ? '2.25rem 1.5rem 0.75rem 6rem' : '2.25rem 1.5rem 0.75rem 1.5rem')};
    border-color: var(--grey);
    border-radius: 0.5rem;
  }

  ${(props) =>
    props.withphoneprefix &&
    css`
      .flag-prefix {
        position: absolute;
        bottom: 0.75rem;
        left: 1.5rem;
        display: inline-flex;
        align-items: center;
        color: var(--grey-dark);

        .icon {
          font-size: 1.5rem;
          margin-right: 0.25rem;
        }
      }
    `};
`;

export default StyledFormGroup;
