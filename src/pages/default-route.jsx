import React from "react";
import { useParams } from "react-router-dom";

const DefaultRoute = () => {
  let params = useParams();

  return <h3>{params.navRoute}</h3>;
};

export default DefaultRoute;
