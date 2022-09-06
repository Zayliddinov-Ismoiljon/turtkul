import React, { useEffect } from "react";
import logo from "assets/site-logo.png";
import { LogoWrapper } from "./logo.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Logo = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-right">
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </LogoWrapper>
    </div>
  );
};

export default Logo;
