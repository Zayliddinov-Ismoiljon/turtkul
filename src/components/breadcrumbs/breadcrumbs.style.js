import Chip from "@mui/material/Chip";
import { styled as materialStyled, emphasize } from "@mui/system";
import styled from "styled-components";

export const StyledBreadcrumb = materialStyled(Chip)(({ theme }) => {
  const backgroundColor = emphasize(theme.palette.divider, 0.02);
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.1),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export const Wrapper = styled.div`
  padding: 15px;
  background: ${({ theme }) => theme.palette.divider};
  margin-top: 15px;
  border-radius: 30px;
  @media (max-width: ${(props) => props.theme.media.mobileL}) {
    padding: 8px;
    border-radius: 10px;
    margin-top: 10px;
  }
`;
