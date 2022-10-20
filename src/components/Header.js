import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const StyledHeader = styled.header`
	background: var(--grey-light);
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
	padding: 0.5rem 0;
	margin-bottom: 5.5rem;

	@media (max-width: 991px) {
		margin-bottom: 1.5rem;
	}
`

const StyledSiteName = styled.a`
	text-decoration: none;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1;
	color: var(--black);
`

const StyledLangButton = styled.button`
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1;
  color: ${({ active }) => active ? 'var(--black)' : 'var(--grey-dark)'};
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  transition: var(--transition);
`

const Header = () => {
	const { t, i18n } = useTranslation()

	return (
		<StyledHeader>
			<Container>
				<Row className='justify-content-between align-items-center'>
					<Col xs='auto'>
						<StyledSiteName href='/'>{t('sitename')}</StyledSiteName>
					</Col>
					<Col xs='auto'>
            <StyledLangButton onClick={() => i18n.changeLanguage('en')} active={i18n.language === 'en'}>EN</StyledLangButton>
            /
            <StyledLangButton onClick={() => i18n.changeLanguage('sk')} active={i18n.language === 'sk' }>SK</StyledLangButton>
					</Col>
				</Row>
			</Container>
		</StyledHeader>
	)
}

export default Header
