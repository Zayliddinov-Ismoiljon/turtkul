import styled from "styled-components";

export const CentralTollStyled= styled.div`
margin: 30px 0px;
background-color: ${({ theme }) => theme.palette.background.default};

@media (max-width: ${(props) => props.theme.media.tabletS}) {
		text-align: center;
		
		.centralTollModalBtn{
      width: 100%;
    }
	}
`;