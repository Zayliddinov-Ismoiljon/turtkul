import styled from "styled-components";
import notFoundImg from "assets/not-found/not-found.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NothingToShow = styled.div`
  width: 500px;
  height: 300px;
  background: url(${notFoundImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.7;
`;
