import styled from 'styled-components';

export const ConnectionStyled = styled.div`
	margin-top: 30px;

	.connection-title {
		border-bottom: 1px solid silver;
	}

	.connection-img {
		width: 40%;
		border-radius: 10px;
		margin-bottom: 10px;
	}

	@media (max-width: ${({ theme }) => theme.media.laptop}) {
		.connection-img{
			width: 50%;
			display: block;
			margin: 0 auto;
		}
	}
`;
