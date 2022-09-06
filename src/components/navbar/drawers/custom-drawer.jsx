import CloseIcon from "@mui/icons-material/Close";
import { CustomDrawerList } from "./custom-drawer-list";
import { CloseButton } from "../navbar.styles";
import { Drawer } from "./custom-drawer.styles.js";
import { getDrawerStatus } from "store/reducer-and-action/language/language";
import { useSelector } from "react-redux";
import { React } from "react";
import "react-modern-drawer/dist/index.css";

const CustomDrawer = ({ toggleDrawer, navbarData }) => {
   const drawer = useSelector(getDrawerStatus);
   return (
      <div>
         <Drawer
            open={drawer}
            onClose={toggleDrawer(false)}
            direction="top"
            enableOverlay={true}
         >
            <CloseButton onClick={toggleDrawer(false)}>
               <CloseIcon />
            </CloseButton>
            <CustomDrawerList
               navbarData={navbarData}
               toggleDrawer={toggleDrawer}
            />
         </Drawer>
      </div>
   );
};
export default CustomDrawer;
