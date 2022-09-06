import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px -30px 0;
  background: ${({ theme }) => theme.palette.primary.dark};
  padding: 30px 30px 50px;
  color: #fff;
  position: relative;

  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    margin: 20px -20px 0;
    padding: 30px 30px 60px;
  }
`;

export const FooterTop = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 70%;
  display: flex;
  gap: 30px;

  p {
    opacity: 0.75;
  }

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
    gap: 0;
    text-align: center;
  }
`;

export const ImgWrapper = styled.div`
  width: 100px;

  img {
    width: 100%;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  p {
    opacity: 0.8;
  }
`;

export const Right = styled.div`
  width: 30%;
  line-height: 150%;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

export const FooterBottom = styled.div`
  p {
    opacity: 0.75;
    margin-top: 0;
  }
  img {
    position: absolute;
    width: 100px;
    right: 30px;
    bottom: 30px;
  }
`;
