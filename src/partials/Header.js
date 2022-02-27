import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as FacebookIcon } from '../icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';

const StyledHeader = styled.header`
  background: var(--grey-light);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  margin-bottom: 5.5rem;
`;

const StyledSitename = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1;
  color: var(--grey-dark);
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  color: var(--grey-dark);
  transition: color var(--transition);
  margin-right: 0.5rem;

  &:hover,
  &:focus {
    color: var(--black);
  }
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  color: var(--grey-dark);
  transition: color var(--transition);

  &:hover,
  &:focus {
    color: var(--black);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row className='justify-content-between align-items-center'>
          <Col xs='auto'>
            <StyledSitename>Nadácia Good Boy</StyledSitename>
          </Col>
          <Col xs='auto'>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              <StyledFacebookIcon className='icon' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <StyledInstagramIcon className='icon' />
            </a>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
