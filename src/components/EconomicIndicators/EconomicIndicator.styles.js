import styled from "styled-components";

export const EconomicIndicatorStyled= styled.div`
margin-top: 30px;

.economic-img{
  width: 70%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}

.economic-title{
  color: blue;
  margin-top: 10px;
}

@media (max-width: ${({ theme }) => theme.media.laptop}) {
    .economic-img{
      width: 100%;
    }

    .economic-title{
      text-align: center;
    }
  }
`;