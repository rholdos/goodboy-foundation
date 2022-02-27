import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as LogoIcon } from '../icons/logo.svg';

const StyledFooter = styled.footer`
  border-top: solid 1px rgba(47, 47, 47, 0.15);
  padding-top: 6rem;
  margin: 7.5rem 0;
`;

const StyledFooterLogoIcon = styled(LogoIcon)`
  width: 13.75rem;
  height: auto;
`;

const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <Row>
          <Col lg={{ span: 3 }}>
            <StyledFooterLogoIcon className='icon' />
          </Col>
          <Col lg={{ offset: 1, span: 2 }}>
            <span className='d-block fw-bold mb-1-half'>Nadácia Good Boy</span>
            <p>O projekte</p>
            <p>Ako na to</p>
            <p>Kontakt</p>
          </Col>
          <Col lg={{ offset: 1, span: 2 }}>
            <span className='d-block fw-bold mb-1-half'>Nadácia Good Boy</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.</p>
          </Col>
          <Col lg={{ offset: 1, span: 2 }}>
            <span className='d-block fw-bold mb-1-half'>Nadácia Good Boy</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
          </Col>
        </Row>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
