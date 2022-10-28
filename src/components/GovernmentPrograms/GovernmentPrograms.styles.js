import styled from "styled-components";

export const GovernmentProgramsStyled= styled.div`
margin-top: 30px;

.programs-title{
  color: blue;
}

.programs-img{
  width: 80%;
  border-radius: 5px;
}

@media (max-width: ${({ theme }) => theme.media.laptop}) {
    .programs-img{
      width: 100%;
    }

    .programs-heading{
      text-align: center;
    }
  }
`;