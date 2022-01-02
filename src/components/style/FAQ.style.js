import styled from 'styled-components'

export const StyledFAQ = styled.section`
	padding: 100px 0;
`
export const FAQContainer = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-direction: column;

	width: 50%;
	padding: 20px;
	border-top: 1px solid ${({ theme }) => theme.colors.neuBlue};

	& h4 {
		color: ${({ theme }) => theme.colors.neuDarkBlue};
	}

	& p {
		font-size: 1rem;
		line-height: 36px;
		letter-spacing: 0.15px;
	}

	&:last-of-type {
		border-bottom: 1px solid ${({ theme }) => theme.colors.neuBlue};
	}

	&:hover {
		h4 {
			color: ${({ theme }) => theme.colors.pryRed};
		}
	}

	@media (max-width: ${({ theme }) => theme.queries.deskMini}) {
		width: 70%;
	}
	@media (max-width: ${({ theme }) => theme.queries.mobileMini}) {
		width: 100%;
	}
`

export const FAQuestion = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	gap: 20px;
`

export const MainContainer = styled.div`
	margin-top: 50px;
`

export const ButtonContainer = styled.div`
	display: grid;
	place-items: center;
	margin-top: 50px;
`
