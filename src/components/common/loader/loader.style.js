import styled from "styled-components";
import { css } from "styled-components";

export const PreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  ${({ expanded }) =>
    expanded &&
    css`
      height: 100vh;
    `};
  & > * {
    color: #0156a7;
  }
`;
