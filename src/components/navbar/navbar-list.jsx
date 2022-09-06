import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import { CustomBox, CustomListItem } from "./navbar.style";

export const NavbarList = ({ toggleDrawer, listData }) => {
   return (
      <CustomBox onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
         <List>
            <ListItem>
               <Typography variant="h6">{listData.head}</Typography>
            </ListItem>
            {listData.list.map((text) => (
               <CustomListItem button key={text}>
                  <ListItemText primary={text} />
               </CustomListItem>
            ))}
         </List>
      </CustomBox>
   );
};
