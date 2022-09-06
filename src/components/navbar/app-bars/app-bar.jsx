import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import IconButton from "@mui/material/IconButton";

import AppBarItems from "./app-bar-items";
import SearchInput from "./search-input";
import Logo from "../logo/logo";
import { BoxStyled } from "./app-bar.styles";

export default function CustomAppBar({ toggleDrawer, navbarData }) {
   return (
      <BoxStyled>
         <AppBar
            color="transparent"
            position="static"
            sx={{ height: "150%", padding: "10px 0" }}
         >
            <Toolbar
               sx={{
                  alignItems: "center",
                  justifyContent: "space-around",
                  margin: "auto 0",
                  flexWrap: "wrap",
               }}
            >
               <Logo />
               <IconButton onClick={toggleDrawer(true)}>
                  <DensityMediumIcon />
               </IconButton>
               <AppBarItems navbarData={navbarData} />
               <SearchInput />
            </Toolbar>
         </AppBar>
      </BoxStyled>
   );
}
