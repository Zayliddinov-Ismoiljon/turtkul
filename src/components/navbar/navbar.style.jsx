import Box from "@mui/system/Box";
import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

export const CustomBox = styled(Box)`
   max-width: 400px;
   padding: 0px;
`;
export const CustomListItem = styled(ListItem)`
   padding-top: 0px;
   padding-bottom: 0px;
`;
export const ListContainer = styled(Box)`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   justify-content: space-between;
`;
export const CloseButton = styled(Button)`
   width: 0;
   color: ${(props) => props.theme.primary};
`;
   