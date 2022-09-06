import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { DrawerMobile } from "./mobile-drawer.styles";
import { DrawerHeader } from "./mobile-drawer.styles";
import MobileDrawerList from "./mobile-drawer-list";
import { Backdrop } from "@mui/material";
import Switch from "components/switch/switch";
import { LangSelect } from "components/spec-menu/lang-select";

export default function MobileDrawer({
  drawer,
  toggleDrawerMobile,
  navbarData,
}) {
  const theme = useTheme();
  return (
    <Backdrop
      open={drawer}
      onClick={() => toggleDrawerMobile(false)}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <DrawerMobile
        variant="persistent"
        anchor="left"
        open={drawer}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <DrawerHeader>
          <LangSelect />
          <Switch />
          <IconButton onClick={() => toggleDrawerMobile(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MobileDrawerList navbarData={navbarData} />
      </DrawerMobile>
    </Backdrop>
  );
}
