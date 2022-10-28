import styled from "styled-components";

export const AboutGovStyled = styled.div`
margin-top: 20px;
.aboutCard{
	background-color: ${({ theme }) => theme.palette.background.default};
}


@media (max-width: ${(props) => props.theme.media.laptop}) {
    text-align: center;
    .aboutModalBtn{
      width: 100%;
    }
  }

  /* @media (max-width: ${(props) => props.theme.media.tabletS}) {
		text-align: start;
    .aboutModalBtn{
      width: 100%;
    }
	} */

`;