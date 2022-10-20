import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const variantStyles = (variant) => {
  switch (variant) {
    case 'primary':
      return css`
        color: var(--grey-light);
        background-color: var(--primary);

        &:hover,
        &:focus {
          color: var(--white);
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

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.35;
  font-weight: 800;
  padding: 20px 24px;
  border: none;
  border-radius: 100px;
  outline: none;
  box-shadow: var(--box-shadow);
  transition: background-color var(--transition), box-shadow var(--transition);

  &:hover,
  &:focus {
    box-shadow: var(--box-shadow-light);
  }

  ${({ variant }) => variantStyles(variant)};
`;

export default StyledLink;
