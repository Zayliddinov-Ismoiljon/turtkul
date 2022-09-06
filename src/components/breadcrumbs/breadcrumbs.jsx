import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledBreadcrumb, Wrapper } from "./breadcrumbs.style";
import HomeIcon from "@mui/icons-material/Home";
import { MdOutlineLastPage } from "react-icons/md";
import { useLocationRoutesArray } from "hooks/useLocationRoutesArray";

const BreadCrumbs = () => {
  const routes = useLocationRoutesArray();

  const pathes = routes.map((value, index) => {
    const last = index === routes.length - 1;
    const to = `/${routes
      .slice(0, index + 1)
      .map((item) => item.route)
      .join("/")}`;
    return last ? (
      <StyledBreadcrumb
        disabled
        color="primary"
        label={value.title ? value.title : value.route}
        icon={<MdOutlineLastPage fontSize="small" />}
        key={to}
      />
    ) : (
      <StyledBreadcrumb
        component={Link}
        label={value.title ? value.title : value.route}
        to={to}
        key={to}
      />
    );
  });
  return (
    <Wrapper>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          to={"/"}
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        {pathes}
      </Breadcrumbs>
    </Wrapper>
  );
};

export default BreadCrumbs;
