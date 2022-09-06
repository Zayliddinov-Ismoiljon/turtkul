import styled from "styled-components";

export const Wrapper = styled.div``;

export const MainBody = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.media.laptop}) {
    flex-direction: column;
  }
`;

export const LeftSideBar = styled.div`
  min-width: 30%;
`;

export const RightPart = styled.div`
  min-width: 60%;
`;
