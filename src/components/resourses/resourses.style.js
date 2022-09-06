import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 20px 0;
`;

export const Card = styled.div`
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s;
  padding: 10px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows?.[10]};

  img {
    cursor: pointer;
    width: 40%;
  }

  p {
    color: ${({ theme }) => theme.palette.primary.main};
    margin: 0;
  }
`;
