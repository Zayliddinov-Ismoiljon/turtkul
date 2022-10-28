import styled from "styled-components";

export const StatisticalReportsStyled= styled.div`
margin-top: 30px;

.statistical-img{
  width: 70%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}

.statistical-title{
  color: blue;
  margin-top: 10px;
}


@media (max-width: ${({ theme }) => theme.media.laptop}) {
    .statistical-img{
      width: 100%;
    }

    .statistical-title{
      text-align: center;
    }
  }
`;