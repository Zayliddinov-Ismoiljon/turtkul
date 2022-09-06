import React from "react";
import { Outlet } from "react-router-dom";

import SpecMenu from "components/spec-menu/spec-menu";
import Navbar from "components/navbar/navbar";
import Footer from "components/footer/footer";

const Layout = () => {
  return (
    <>
      <SpecMenu />
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
