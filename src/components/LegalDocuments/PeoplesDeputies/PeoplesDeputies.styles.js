import styled from "styled-components";

export const PeoplesDeputiesStyled = styled.div`
margin-top: 30px;

.peoples-title{
  color: blue;

  @media (min-width: ${({ theme }) => theme.media.mobileL}) {
    .peoples-title{
      text-align: center;
    }
  }
}
`;