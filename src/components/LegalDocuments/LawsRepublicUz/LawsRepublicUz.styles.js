import styled from "styled-components";

export const LawsRepublicUzStyled= styled.div`
margin-top: 30px;
width: 100%;

.laws-title{
  color: blue;
}

@media (min-width: ${({ theme }) => theme.media.laptop}) {
   width: 100%;
   word-break: break-all;
  }
`;