import styled from 'styled-components'

export const FeaturesContainer = styled.section`
	margin: 100px 0;
`

export const TabHeaders = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;

	@media (max-width: ${({ theme }) => theme.queries.tablet}) {
		flex-direction: column;
		padding: 0 20px;
	}
`

export const TabButton = styled.button`
	padding: 20px 50px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.neuBlue};
	position: relative;
	color: ${({ clicked, index, theme }) =>
		clicked === index ? theme.colors.neuDarkBlue : theme.colors.neuBlue};
	font-weight: ${({ theme }) => theme.weight.mid};

	&::after {
		content: '';
		height: 3px;
		width: 100%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		margin-top: 17px;
		opacity: ${({ clicked, index }) => (clicked === index ? '1' : '0')};
		background-color: ${({ theme }) => theme.colors.pryRed};
	}

	&:hover {
		&::after {
			opacity: 1;
		}
	}

	@media (max-width: ${({ theme }) => theme.queries.tablet}) {
		width: 100%;
		text-align: center;
	}
`
