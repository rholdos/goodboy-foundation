import styled, { css } from 'styled-components';

const handleVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return css`
        color: var(--body);
        background-color: var(--primary);

        &:hover,
        &:focus {
          color: var(--black);
          background-color: var(--primary-dark);
        }
      `;
    case 'secondary':
      return css`
        color: var(--body);
        background-color: var(--secondary);

        &:hover,
        &:focus {
          color: var(--black);
          background-color: var(--secondary-dark);
        }
      `;
    default:
      return css`
        color: var(--white);
        background-color: var(--grey);
      `;
  }
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.35;
  font-weight: bold;
  padding: 20px 24px;
  border: none;
  border-radius: 100px;
  box-shadow: var(--box-shadow);
  transition: background-color var(--transition), box-shadow var(--transition);

  &:hover,
  &:focus {
    box-shadow: var(--box-shadow-light);
  }

  ${({ variant }) => handleVariant(variant)};
`;

export default StyledButton;
