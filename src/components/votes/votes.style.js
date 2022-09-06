import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px 0 70px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 100px;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    grid-template-columns: 1fr;
    gap: 80px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    margin: 20px 0 70px;
  }
`;

export const VoteCard = styled.div`
  padding: 30px;
  box-shadow: ${({ theme }) => theme.shadows?.[12]};
  position: relative;
  .react-sweet-progress-symbol {
    color: ${({ theme }) => theme.palette.text.primary};
  }
  h4 {
    margin-top: 0;
  }
`;

export const VoteBody = styled.div`
  margin-top: 20px;
  opacity: 0.7;
  overflow: auto;
  height: 150px;
  line-height: 150%;
`;

export const IconsWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: -60px;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Like = styled.div`
  display: flex;
  gap: 40px;
`;
export const Vote = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  text-transform: capitalize;

  button {
    font-size: 16px;
    gap: 10px;
    font-weight: bold;
  }
`;
