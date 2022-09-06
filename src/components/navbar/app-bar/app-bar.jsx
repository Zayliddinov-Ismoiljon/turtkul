import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import {
   IconWrapperButton,
   Search,
   SearchIconWrapper,
   StyledInputBase,
} from "./app-bar.styles";
import { AppBarItem } from "./app-bar-item";

export default function CustomAppBar({ toggleDrawer, navbarData }) {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconWrapperButton onClick={toggleDrawer(true)}>
                  <DensityMediumIcon />
               </IconWrapperButton> 
               {navbarData.map((data) => (
                  <AppBarItem data={data} />
               ))}
               <Search>
                  <SearchIconWrapper>
                     <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                     placeholder="izlash..."
                     inputProps={{ "aria-label": "search" }}
                  />
               </Search>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
