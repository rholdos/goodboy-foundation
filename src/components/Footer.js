import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Container>
      <StyledFooter>
        <Row>
          <Col lg={{ span: 3 }}>
            <StyledFooterLogoIcon className='icon' />
          </Col>
          <Col lg={{ offset: 1, span: 2 }}>
            <span className='d-block fw-bold mb-1-half'>{t('sitename')}</span>
            <p>{t('aboutProject')}</p>
            <p>{t('howTo')}</p>
            <p>{t('contact')}</p>
          </Col>
          <Col lg={{ offset: 1, span: 2 }}>
            <span className='d-block fw-bold mb-1-half'>{t('sitename')}</span>
            <p>{t('footerColText')}</p>
          </Col>
          <Col lg={{ offset: 1, span: 2 }}>
            <span className='d-block fw-bold mb-1-half'>{t('sitename')}</span>
            <p>{t('footerColText')}</p>
          </Col>
        </Row>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
