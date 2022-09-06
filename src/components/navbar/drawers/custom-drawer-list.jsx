import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { CustomBox, CustomListItem } from "./custom-drawer.styles";
import { ListContainer } from "./../navbar.styles";

export const CustomDrawerList = ({ toggleDrawer, navbarData }) => {
  return (
    <ListContainer>
      {navbarData.map((listData) => (
        <CustomBox onClick={toggleDrawer(false)} key={listData.head}>
          <List>
            <ListItem>
              <Typography
                sx={{ fontWeight: "bold", textDecoration: "none" }}
                variant="h6"
              >
                {listData.head}
              </Typography>
            </ListItem>
            {listData.list.map((listItem) => (
              <Link
                onClick={toggleDrawer(false)}
                to={`${listData.link}/${listItem.route}`}
                key={listItem.title}
              >
                <CustomListItem onClick={toggleDrawer(false)} button>
                  <ListItemText
                    onClick={toggleDrawer(false)}
                    primary={listItem.title}
                  />
                </CustomListItem>
              </Link>
            ))}
          </List>
        </CustomBox>
      ))}
    </ListContainer>
  );
};
