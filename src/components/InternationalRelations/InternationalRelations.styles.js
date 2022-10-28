import styled from "styled-components";

export const InternationalRelationsStyled= styled.div`
margin-top: 30px;

.international-title{
  color: blue;
}

@media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 100%;

    .international-title{
      text-align: center;
    }
  }
`;