import styled from "styled-components";

export const ActionStrategyStyled= styled.div`
margin-top: 30px;

.strategy-title{
  color: blue;
}

.strategy-img{
  width: 70%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}

@media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 100%;

    .strategy-img{
      width: 100%;
    }

    .international-title{
      text-align: center;
    }
  }

`;