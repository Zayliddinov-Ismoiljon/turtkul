import styled from "styled-components";

export const OpenDataStyled= styled.div`
margin-top: 30px;

.opendata-img{
  width: 70%;
  border-radius: 10px;
  display: block;
  margin: 15px auto;
  object-fit: cover;
}

.opendata-title{
  color: blue;
  margin-top: 10px;
}

@media (max-width: ${({ theme }) => theme.media.laptop}) {
    .opendata-img{
      width: 100%;
    }

    .opendata-title{
      text-align: center;
    }
  }
`;