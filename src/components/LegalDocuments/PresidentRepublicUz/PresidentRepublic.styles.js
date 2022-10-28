import styled from "styled-components";

export const PresidentRepublicStyled= styled.div`
margin-top: 30px;

.president-title{
  color: blue;
}

@media (min-width: ${({ theme }) => theme.media.mobile}) {
    .president-title{
      text-align: center;
    }
  }
`;