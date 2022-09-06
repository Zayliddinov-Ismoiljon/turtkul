import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 100%;
  }
`;

export const RigthWrapper = styled.div`
  width: 25%;
  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileL}) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 0 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  border-bottom: 1px solid silver;

  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
    }
  }
`;

export const Right = styled.div`
  button {
    background: ${({ theme }) => theme.palette.primary.main} !important;
    text-transform: capitalize;
  }

  @media (max-width: ${({ theme }) => theme.media.tabletS}) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 0;
`;

export const ModalWrapper = styled.div`
  height: 80vh;
  overflow-y: scroll;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 8%;
  left: 13%;
  transform: translate(-50% -50%);
  width: 70%;
  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.shadows?.[22]};

  padding: 30px;
  border-radius: 8px;
  height: 75vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  svg {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }

  h2 {
    margin-top: 0;
    color: ${({ theme }) => theme.palette.primary.main};

    text-align: center;
  }

  p {
    line-height: 150%;
    text-align: justify;
  }
`;
