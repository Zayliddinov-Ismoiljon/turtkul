import styled from "styled-components";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const VirtualReceptionWrapper = styled.div``;
export const MainFormWrapper = styled.div``;

// Inputs

export const Textarea = styled(TextareaAutosize)`
  transition-duration: 0.01s;
  font-size: 17px;
  border: 2px solid #aaa;
  box-sizing: border-box;
  outline: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.background.default};

  &:focus {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`;
