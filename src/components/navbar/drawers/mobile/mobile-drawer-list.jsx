import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { DrawerMobileList } from "./mobile-drawer.styles";
import { Link } from "react-router-dom";

export default function MobileDrawerList({ navbarData }) {
  return (
    <DrawerMobileList
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menyu
        </ListSubheader>
      }
    >
      {navbarData.map((navItem, index) => (
        <MobileDrawerListItems navItem={navItem} key={index} />
      ))}
    </DrawerMobileList>
  );
}

const MobileDrawerListItems = ({ navItem }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={navItem.head} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {navItem.list.map((listItem) => (
            <Link to={`${navItem.link}/${listItem.route}`} key={listItem.route}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={listItem.title} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  );
};
