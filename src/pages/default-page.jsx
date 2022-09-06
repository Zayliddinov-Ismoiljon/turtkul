import React from "react";
import { useParams } from "react-router-dom";

const DefaultPage = () => {
  let params = useParams();

  return <h1>{params.navbarRoutes}</h1>;
};

export default DefaultPage;
