import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Service = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
  }
`;
export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  padding: 7px 15px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${({ theme }) => theme.palette.primary.dark};

  svg {
    font-size: 50px;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    padding: 10px 15px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileM}) {
    padding: 10px;
  }
`;

export const CommentsWrapper = styled.div`
  width: 50%;
  padding: 0 30px;
  .swiper-initialized {
    box-shadow: ${({ theme }) => theme.shadows?.[22]};
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    padding: 0;
  }
`;

export const SwiperItem = styled.div`
  padding: 40px 50px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    padding: 20px 30px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    padding: 10px 15px;
  } ;
`;

export const Comment = styled.div`
  margin: 15px 0;
  opacity: 0.7;
  overflow: auto;
  height: 110px;
  line-height: 150%;

  ::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgb(146, 146, 255);
  }

  ::-webkit-scrollbar-thumb {
    background: blue;
  }
`;
