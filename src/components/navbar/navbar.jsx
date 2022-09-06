import * as React from "react";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CustomDrawer from "./drawers/custom-drawer";
import MobileDrawer from "./drawers/mobile/mobile-drawer";
import CustomAppBar from "./app-bars/app-bar";
import MobileAppBar from "./app-bars/mobile/mobile-app-bar";
import { Wrapper } from "./navbar.styles";

import {
  getDrawerStatus,
  getNavbarData,
  toggleDrawerRedux,
} from "store/reducer-and-action/language/language";

const Navbar = () => {
  const navbarData = useSelector(getNavbarData);
  const drawerStatus = useSelector(getDrawerStatus);
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:915px)");
  const toggleDrawer = (toggleTo) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    dispatch(toggleDrawerRedux(toggleTo));
  };
  const toggleDrawerMobile = (toggleTo) => {
    dispatch(toggleDrawerRedux(toggleTo));
  };

  return (
    <Wrapper>
      <React.Fragment key={"top"}>
        {matches ? (
          <>
            <MobileDrawer
              navbarData={navbarData}
              drawer={drawerStatus}
              toggleDrawerMobile={toggleDrawerMobile}
            />
            <MobileAppBar
              navbarData={navbarData}
              drawer={drawerStatus}
              toggleDrawerMobile={toggleDrawerMobile}
            />
          </>
        ) : (
          <>
            <CustomDrawer
              navbarData={navbarData}
              drawer={drawerStatus}
              toggleDrawer={toggleDrawer}
            />
            <CustomAppBar
              navbarData={navbarData}
              drawer={drawerStatus}
              toggleDrawer={toggleDrawer}
            />
          </>
        )}
      </React.Fragment>
    </Wrapper>
  );
};

export default Navbar;
