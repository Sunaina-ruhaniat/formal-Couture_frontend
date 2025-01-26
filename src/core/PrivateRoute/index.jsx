import Layout from "components/Layout";
import { publicPaths } from "config/routes";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  console.log("am here1");

  // if (!localStorage.getItem("user")) {
  //   return <Navigate to={publicPaths.login} replace />;
  // }
  console.log("am here2");

  return <Layout>{children}</Layout>;
};

export default PrivateRoute;
