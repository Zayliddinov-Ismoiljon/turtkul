import { styled } from "@mui/material/styles";
import { styled as styledMUI } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

export const drawerWidth = 240;

export const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
   justifyContent: "flex-end",
}));

export const DrawerMobile = styledMUI(Drawer)(() => ({
   width: drawerWidth,
   flexShrink: 0,
   "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
   },
}));
export const DrawerMobileList = styledMUI(List)(() => ({
   width: "100%",
   maxWidth: 360,
   bgcolor: "background.paper",
}));
