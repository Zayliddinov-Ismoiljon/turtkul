import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  svg {
    color: #fff;
  }
  .MuiAccordionSummary-root {
    background: ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)"};
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 100%;
  }
`;
