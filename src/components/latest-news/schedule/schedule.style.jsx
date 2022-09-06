import Paper from "@mui/material/Paper";
import styled from "styled-components";

export const CustomPaper = styled(Paper)`
  margin-top: 16px;
  padding: 10px 0px;
  border-left: 8px solid ${({ theme }) => theme.palette.primary.main};
`;

export const TimeTitle = styled.p`
  font-weight: 600;
  margin-right: 10px;
  padding: 0px 10px;
  border-right: 1px solid ${({ theme }) => theme.palette.text.primary};
  min-width: max-content;
`;
export const Info = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: auto;
`;
