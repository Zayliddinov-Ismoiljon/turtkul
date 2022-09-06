import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import Paper from "@mui/material/Paper";

export const Time = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.palette.primary.main};

  display: flex;
  align-items: center;
  font-size: 15px;
  svg {
    margin-right: 6px;
  }
`;
export const MainBody = styled.p`
  margin: 14px 0px 0px 0px;
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const Wrapper = styled(ListItemButton)`
  flex-direction: column;
  align-items: flex-start !important;
  cursor: pointer;
  padding: 10px 40px !important;
  width: 100%;
  color: ${({ theme }) => theme.palette.text.primary};
  box-sizing: border-box;
`;

export const CustomPaper = styled(Paper)`
  margin-top: 16px;
  padding: 30px 0px;
  width: 100%;
`;

export const Box = styled.div`
  max-height: 400px;
  overflow: auto;
  a {
    text-decoration: none;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  a:nth-child(2n + 1) {
    border-right: 1px solid ${({ theme }) => theme.palette.text.primary};
  }
  a:nth-child(2n) {
  }
  @media (max-width: ${(props) => props.theme.media.tabletS}) {
    grid-template-columns: 1fr;
    a:nth-child(n) {
      padding: 0px;
      border-right: none;
    }
  }
`;
