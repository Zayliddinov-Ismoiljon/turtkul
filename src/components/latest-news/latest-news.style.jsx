import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.primary.main};

  font-size: 30px;
  margin: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  div:first-child {
    flex: 1.75;
  }
  div:last-child {
    flex: 1;
  }
  @media (max-width: ${(props) => props.theme.media.laptop}) {
    flex-direction: column;
  }
`;
