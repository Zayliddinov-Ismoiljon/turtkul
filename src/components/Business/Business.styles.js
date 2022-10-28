import styled from "styled-components";

export const BusinessStyled= styled.div`
margin-top: 30px;

.business-img{
  width: 70%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}

.business-title{
  color: blue;
  margin-top: 10px;
}

@media (max-width: ${({ theme }) => theme.media.laptop}) {
    .business-img{
      width: 100%;
    }

    .business-title{
      text-align: center;
    }
  }
`;