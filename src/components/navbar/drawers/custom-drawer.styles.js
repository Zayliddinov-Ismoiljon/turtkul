import styled from "styled-components";
import Box from "@mui/system/Box";
import ListItem from "@mui/material/ListItem";
import DrawerLib from "react-modern-drawer";

export const CustomBox = styled(Box)`
  max-width: 400px;
  padding: 0px;
`;
export const CustomListItem = styled(ListItem)`
  padding-top: 0px;
  padding-bottom: 0px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
export const Drawer = styled(DrawerLib)`
  height: 100% !important;
  overflow-y: scroll !important;
  background: ${({ theme }) => theme.palette.background.default} !important;
`;
