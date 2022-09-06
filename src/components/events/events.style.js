import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  @media (min-width: ${({ theme }) => theme.media.mobileS}) {
    gap: 20px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.media.mobileL}) {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.media.laptop}) {
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CardWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadows?.[9]};
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s;
  padding-bottom: 20px;
  :hover {
    box-shadow: ${({ theme }) => theme.shadows?.[22]};
  }

  img {
    transition: 0.3s;
    cursor: pointer;
    width: 100%;
  }

  img:hover {
    transform: scale(1.07);
  }

  p {
    padding: 15px 15px 0;
    margin: 0;
  }
`;

export const CardText = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};

  padding: 15px 15px 0;
  /* @media (min-width: ${({ theme }) => theme.media.mobileS}) {
    padding: 30px 30px 0;
  } */
`;
