import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

const StyledStepper = styled.div`
	display: inline-flex;
	margin-bottom: 1.75rem;
`

const StyledStep = styled.span`
	${({ active }) => css`
		width: ${active ? '2.75rem' : '1.25rem'};
		opacity: ${active ? '1' : '.35'};
		height: 0.375rem;
		background: ${active ? 'var(--gradient-horizontal-primary)' : 'var(--grey)'};
		border-radius: 0.625rem;
		transition: width var(--transition), background var(--transition), opacity var(--transition);

		&:not(:last-child) {
			margin-right: 0.5rem;
		}
	`}
`

const Stepper = () => {
	const currentStep = useSelector((state) => state.steps.current)
	return (
		<StyledStepper>
			<StyledStep active={currentStep === 1} />
			<StyledStep active={currentStep === 2} />
			<StyledStep active={currentStep === 3} />
		</StyledStepper>
	)
}

export default Stepper
